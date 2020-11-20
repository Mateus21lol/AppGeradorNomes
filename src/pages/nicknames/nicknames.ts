import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NicknamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nicknames',
  templateUrl: 'nicknames.html',
})
export class NicknamesPage {

  NomeSimplesGerado: any;
  NomeSimplesCompletoGerado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.NomeSimplesGerado = "Gere um nome";
    this.NomeSimplesCompletoGerado = "Gere um nome";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NicknamesPage');
  }

  gerarNomeSimples() {

    var NomesLista = ["Cross", "Fire", "CrossFire", "Echos", "Saints", "Rush", "Same", "November", "Rain",
      "Dormouse", "Prisoner ", "Little", "Cool Eagle", "Eagle", "The Salamander", "Salamander", "Mouse", "Strong", "Crazy",
      "Eternal", "Parrot ", "Coralina", "Lucian", "Der", "Pilar",
      "Adele", "YakYak", "FillyFilly", "Iolanda", "Pietro", "Opossum",
      "Tseldora", "Souls", "Eleonara", "Pedra", "Luz", "Nazmaginn", "Cold", "Play",
      "Passenger", "Betina", "Esperança", "Skinny", "White Flag", "Warmrock",
      "Immortal", "Branca", "Estrela", "Linda", "Micaela", "Teodora", "Skyfall"

    ];
    let NumeroSort = Math.floor(Math.random() * 51); // total 106
    this.NomeSimplesGerado = NomesLista[NumeroSort];
    // alert("tam: " + NomesLista.length);
  }


  gerarNomeSimplesCompleto() {
    var NomesLista = NomesLista = ["Cross", "Fire", "CrossFire", "Echos", "Saints", "Rush", "Same", "November", "Rain",
      "Dormouse", "Prisoner ", "Little", "Cool Eagle", "Eagle", "The Salamander", "Salamander", "Mouse", "Strong", "Crazy",
      "Eternal", "Parrot ", "Coralina", "Lucian", "Der", "Pilar",
      "Adele", "YakYak", "FillyFilly", "Iolanda", "Pietro", "Opossum",
      "Tseldora", "Souls", "Eleonara", "Pedra", "Luz", "Nazmaginn", "Cold", "Play",
      "Passenger", "Betina", "Esperança", "Skinny", "White Flag", "Warmrock",
      "Immortal", "Branca", "Estrela", "Linda", "Micaela", "Teodora", "Skyfall"

    ];

    var SobrenomeLista = ["Rabbit", "Left-handed", "Student", "Steamy", "Batista", "Seriously", "Polar", "Burst", "Sad", "Dangerous", "Rodrigues", "Airmen", "Horse", "Tasty", "Nervous",
      "Eternal", "Parrot ", "Coralina", "Lucian", "Der", "Pilar", "Bare", "Titanium", "We are", "Fat", "The Fat", "Rat", "The Rat", "The", "Ride", "End", "Unstoppable", "Legend",
      "Die", "Never", "Scientist", "The Scientits", "Rush", "Astora", "Noble", "Dark", "Souls", "The Dark Soul", "White", "Flag", "Play", "YakYak", "Mouse", "Strong", "Crazy"];

    //  this.NomeSimplesCompletoGerado = SobrenomeLista.length;
    let NumeroSort = Math.floor(Math.random() * 51); // total 106
    let NumeroSortP = Math.floor(Math.random() * 48); // total 85
    let NumeroSortS = Math.floor(Math.random() * 48); // total 85
    this.NomeSimplesCompletoGerado = NomesLista[NumeroSort] + " " + SobrenomeLista[NumeroSortP] + " " + SobrenomeLista[NumeroSortS];


  }

}
