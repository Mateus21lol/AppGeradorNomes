import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NomesfantasiososfemininosPage } from '../nomesfantasiososfemininos/nomesfantasiososfemininos';

/**
 * Generated class for the NomesfantasiososmasculinosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomesfantasiososmasculinos',
  templateUrl: 'nomesfantasiososmasculinos.html',
})
export class NomesfantasiososmasculinosPage {

  NomeHumanoGerado: any;
  NomeElfoGerado: any;
  NomeOrcGerado: any;
  NomeAnaoGerado: any;
  NomeHumanoGeradoCompleto: any;
  NomeElfoGeradoCompleto: any;
  NomeOrcGeradoCompleto: any;
  NomeAnaoGeradoCompleto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.NomeHumanoGerado = "Gere um nome";
    this.NomeElfoGerado = "Gere um nome";
    this.NomeOrcGerado = "Gere um nome";
    this.NomeAnaoGerado = "Gere um nome";

    this.NomeHumanoGeradoCompleto = "Gere um nome";
    this.NomeElfoGeradoCompleto = "Gere um nome";
    this.NomeOrcGeradoCompleto = "Gere um nome";
    this.NomeAnaoGeradoCompleto = "Gere um nome";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NomesfantasiososmasculinosPage');
  }

  gerarNomeSimples() {
    var NomesListaHumano = ["Zandak", "Bellannan", "Tiba", "Rowoas", "Vin", "Vide", "Cequo", "Gaomi",
      "Poda", "Asenr", "Inzei", "Sayr", "Artur", "Duos", "Boislau", "Gaoal", "Koyzo", "Zamobozi", "Cilia",
      "Inhono ", "Will", "Pethorn ", "Koucuke", "Jadon", "Sterah", "Za", "Caenn"];
    //alert("tam: " + NomesListaOrc.length);
    let NumeroSort = Math.floor(Math.random() * 26); // total 106
    this.NomeHumanoGerado = NomesListaHumano[NumeroSort];

    var NomesListaElfo = ["Luision", "Zoriron", "Barociduk", "Cekaihad", "Louon", "Osusthalion", "Tuexoion", "Eldir",
      "Curunuo", "Aegthir", "Belegadar", "Malrandir", "Aegborn", "Seaster", "Beleghad", "Ianroar", "Adohand", "Diellee", "Thirel",
      "Andmandthan ", "Gorrond", "Wenne ", "Pator", "Halree", "Dorgriel", "Rata", "Rielthal"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    this.NomeElfoGerado = NomesListaElfo[NumeroSort];

    var NomesListaOrc = ["Brusua", "Ghadi", "Barociduk", "Bardoam", "Shulnearba", "Brokzor", "Umugam", "Gogrgdum",
      "Vadohamph", "Plealgdu", "Veu", "Malkmub", "Artur", "Zeph", "Kagak", "Tupel", "Ogolwe", "Olfihabush", "Nodob",
      "Shobob ", "Thoroar", "Graros ", "Nomgulg", "Jureg", "Shrek", "Xujarek", "Zanhorn"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    this.NomeOrcGerado = NomesListaOrc[NumeroSort];

    var NomesListaAnao = ["Ruktho", "Santhor", "Immargdran", "Bael", "Modrin", "Tolda", "Gnaua", "Darhrim",
      "Marghrim", "Oristili", "Nuroak", "Ezegan", "Darthur", "Fallstili", "Glanoric", "artharn", "Therrim", "Bolain", "Thedinbur",
      "Buizyuak ", "Jarsu", "Xuric ", "Andoita", "Arxoent", "Poeain", "Quavathen", "Glorili"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    this.NomeAnaoGerado = NomesListaAnao[NumeroSort];
  }

  gerarNomeSimplesCompleto() {


    var NomesListaHumano = ["Zandak", "Bellannan", "Tiba", "Rowoas", "Vin", "Vide", "Cequo", "Gaomi",
      "Poda", "Asenr", "Inzei", "Sayr", "Artur", "Duos", "Boislau", "Gaoal", "Koyzo", "Zamobozi", "Cilia",
      "Inhono ", "Will", "Pethorn ", "Koucuke", "Jadon", "Sterah", "Za", "Caenn"];
    var NomesListaSobrenomeHumano = ["Uuthrakt", "Chorster", "Kroft", "Darkeyes", "Stavenger", "Ehput-Ki", "Ankhalab", "Serpenthelm",
      "Chernin", "Hiar", "Tevayxe", "Broisfe", "Sephi", "Tomma", "Boislau", "Carles", "Koyzo", "Zamobozi", "Cilia",
      "North ", "Nova", "Hawk ", "Redneth", "Olive", "Ash", "Do'he", "Basil"];
    //alert("tam: " + NomesListaOrc.length);
    let NumeroSort = Math.floor(Math.random() * 26); // total 106
    let NumeroSortS = Math.floor(Math.random() * 26); // total 106
    this.NomeHumanoGeradoCompleto = NomesListaHumano[NumeroSort] + " " + NomesListaSobrenomeHumano[NumeroSortS];
    //  this.NomeSimplesCompletoGerado = NomesLista[NumeroSort] + " " + SobrenomeLista[NumeroSortP] + " " + SobrenomeLista[NumeroSortS];

    var NomesListaElfo = ["Luision", "Zoriron", "Barociduk", "Cekaihad", "Louon", "Osusthalion", "Tuexoion", "Eldir",
      "Curunuo", "Aegthir", "Belegadar", "Malrandir", "Aegborn", "Seaster", "Beleghad", "Ianroar", "Adohand", "Diellee", "Thirel",
      "Andmandthan ", "Gorrond", "Wenne ", "Pator", "Halree", "Dorgriel", "Rata", "Rielthal"];
    var NomesListaSobrenomeElfo = ["Ra'ail", "Nas'lee", "Tagorelenve", "Erilshimíbreg", "Dae-leene", "Halthacír", "Eär-tar", "Torortouilthorn",
      "Derorre", "Ros'uil", "Daemaris", "Virquinal", "Grekalyn", "Farnelis", "Iandove", "Nericyne", "Nerimoira", "Waesbalar", " Miagwyn",
      "Uldor ", "Nova", "Reyro ", "Redneth", "Zummoira", "Ash", "Do'he", "Olafaren"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    NumeroSortS = Math.floor(Math.random() * 26); // total 106
    this.NomeElfoGeradoCompleto = NomesListaElfo[NumeroSort] + " " + NomesListaSobrenomeElfo[NumeroSortS];

    var NomesListaOrc = ["Brusua", "Ghadi", "Barociduk", "Bardoam", "Shulnearba", "Brokzor", "Umugam", "Gogrgdum",
      "Vadohamph", "Plealgdu", "Veu", "Malkmub", "Artur", "Zeph", "Kagak", "Tupel", "Ogolwe", "Olfihabush", "Nodob",
      "Shobob ", "Thoroar", "Graros ", "Nomgulg", "Jureg", "Shrek", "Xujarek", "Zanhorn"];

    var NomesListaSobrenomeOrc = ["Kurak", "Oradolug", "Foba", "Coish", "Dae", "Lurbuk", "tar", "Nagrtuzoa",
      "Derorre", "Ros", "Daemaris", "Virquinal", "Grekalyn", "Farnelis", "Iandove", "Nericyne", "Nerimoira",
      "Asrur", " Huarag",
      "Uldor ", "Khagro", "Reyro ", "Redneth", "Lurorieorn", "Foba", "Do", "Uslg"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    NumeroSortS = Math.floor(Math.random() * 26); // total 106
    this.NomeOrcGeradoCompleto = NomesListaOrc[NumeroSort] + " " + NomesListaSobrenomeOrc[NumeroSortS];


    var NomesListaAnao = ["Ruktho", "Santhor", "Immargdran", "Bael", "Modrin", "Tolda", "Gnaua", "Darhrim",
      "Marghrim", "Oristili", "Nuroak", "Ezegan", "Darthur", "Fallstili", "Glanoric", "artharn", "Therrim", "Bolain", "Thedinbur",
      "Buizyuak ", "Jarsu", "Xuric ", "Andoita", "Arxoent", "Poeain", "Quavathen", "Glorili"];

    var NomesListaSobrenomeAnao = ["Fukas", "Oradolug", "Theor", "Coish", "Khuldraeck", "Ernuda", "Throak", "Bottlemane",
      "Udrout", "Oakengrog", "Largeblade", "Jarkas", "Farbiehe", "Bofgrim ", "Glangan ", "Ganmoul ", "Daldak ",
      "Cohoim", " Farlaair",
      "Axearm ", "Windtoe", "Reyro ", "Beastmace", "Metalthane", "Vout", "Hogur", "Manu"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    NumeroSortS = Math.floor(Math.random() * 26); // total 106
    this.NomeAnaoGeradoCompleto = NomesListaAnao[NumeroSort] + " " + NomesListaSobrenomeAnao[NumeroSortS];
    //    this.NomeSimplesCompletoGerado = NomesLista[NumeroSort] + " " + SobrenomeLista[NumeroSortP] + " " + SobrenomeLista[NumeroSortS];

  }




}
