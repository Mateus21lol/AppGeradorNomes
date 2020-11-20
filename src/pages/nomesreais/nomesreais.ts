import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NomesreaisfemininosPage } from '../nomesreaisfemininos/nomesreaisfemininos';
import { NomesreaismasculinosPage } from '../nomesreaismasculinos/nomesreaismasculinos';

/**
 * Generated class for the NomesreaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomesreais',
  templateUrl: 'nomesreais.html',
})
export class NomesreaisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NomesreaisPage');
  }

  nomesReaisMasculinos() {
    this.navCtrl.push(NomesreaismasculinosPage);
  }

  nomesReaisFemininos() {
    this.navCtrl.push(NomesreaisfemininosPage);
  }

}
