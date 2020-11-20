import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NomesfantasiososfemininosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomesfantasiososfemininos',
  templateUrl: 'nomesfantasiososfemininos.html',
})
export class NomesfantasiososfemininosPage {

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
    console.log('ionViewDidLoad NomesfantasiososfemininosPage');
  }

  gerarNomeSimples() {
    var NomesListaHumano = ["Mewuon", "Vuyn", "Tiba", "Kinae", "Vin", "Vide", "Cequo", "Gaomi",
      "Poda", "Varzand", "Inzei", "Sayr", "Maratris", "Naldkeda", "Stolove", "Pa-grim", "Jackkima", "Falone", "Cilia",
      "Freddama ", "Tan", "Stasi ", "Civin", "Adel'ceol", "Sterah", "Za", "Alinys"];
    //alert("tam: " + NomesListaOrc.length);
    let NumeroSort = Math.floor(Math.random() * 26); // total 106
    this.NomeHumanoGerado = NomesListaHumano[NumeroSort];

    var NomesListaElfo = ["Nissa", "Zoriron", "Wandakahn", "Corella", "Kavrala", "Unakain", "Quithyra", "Ravakain",
      "Sarya", "Folre", "Belegadar", "Malrandir", "Aolis", "Seaster", "Beleghad", "Ianroar", "Adohand", "Diellee", "Thirel",
      "Andmandthan ", "Tiriana", "Daethie", "Aralar", "Saria", "Dorgriel", "Rata", "Rielthal"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    this.NomeElfoGerado = NomesListaElfo[NumeroSort];

    var NomesListaOrc = ["Shazpe", "Ghadi", "Barociduk", "Bardoam", "Shulnearba", "Snaha", "Umugam", "Balu",
      "Ergak", "Plealgdu", "Veu", "Malkmub", "Mauhlehakh", "Muciurat", "Kagak", "Tupel", "Ogolwe", "Olfihabush", "Nodob",
      "Shobob ", "Thoroar", "Graros ", "Nomgulg", "Jureg", "Shrek", "Xujarek", "Nebuk"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    this.NomeOrcGerado = NomesListaOrc[NumeroSort];

    var NomesListaAnao = ["Elcuyfoa", "Erigu", "Immargdran", "Durierte", "Valbi", "Tolda", "Gnaua", "Darhrim",
      "Marghrim", "Nufaila", "Nuroak", "Ezegan", "Darthur", "Fallstili", "Glanoric", "artharn", "Therrim", "Bolain", "Azmoa",
      "Buizyuak ", "Delre", "Ryalayora", "Andoita", "Arxoent", "Poeain", "Azinkara", "Glorili"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    this.NomeAnaoGerado = NomesListaAnao[NumeroSort];
  }

  gerarNomeSimplesCompleto() {


    var NomesListaHumano = ["Mewuon", "Vuyn", "Tiba", "Kinae", "Vin", "Vide", "Cequo", "Gaomi",
      "Poda", "Varzand", "Inzei", "Sayr", "Maratris", "Naldkeda", "Stolove", "Pa-grim", "Jackkima", "Falone", "Cilia",
      "Freddama ", "Tan", "Stasi ", "Civin", "Adel'ceol", "Sterah", "Za", "Alinys"];
    var NomesListaSobrenomeHumano = ["Uuthrakt", "Chorster", "Kroft", "Darkeyes", "Stavenger", "Ehput-Ki", "Ankhalab", "Serpenthelm",
      "Chernin", "Hiar", "Tevayxe", "Broisfe", "Sephi", "Tomma", "Boislau", "Carles", "Koyzo", "Zamobozi", "Cilia",
      "North ", "Nova", "Hawk ", "Redneth", "Olive", "Ash", "Do'he", "Basil"];
    //alert("tam: " + NomesListaOrc.length);
    let NumeroSort = Math.floor(Math.random() * 26); // total 106
    let NumeroSortS = Math.floor(Math.random() * 26); // total 106
    this.NomeHumanoGeradoCompleto = NomesListaHumano[NumeroSort] + " " + NomesListaSobrenomeHumano[NumeroSortS];
    //  this.NomeSimplesCompletoGerado = NomesLista[NumeroSort] + " " + SobrenomeLista[NumeroSortP] + " " + SobrenomeLista[NumeroSortS];

    var NomesListaElfo = ["Nissa", "Zoriron", "Wandakahn", "Corella", "Kavrala", "Unakain", "Quithyra", "Ravakain",
      "Sarya", "Folre", "Belegadar", "Malrandir", "Aolis", "Seaster", "Beleghad", "Ianroar", "Adohand", "Diellee", "Thirel",
      "Andmandthan ", "Tiriana", "Daethie", "Aralar", "Saria", "Dorgriel", "Rata", "Rielthal"];
    var NomesListaSobrenomeElfo = ["Ra'ail", "Nas'lee", "Tagorelenve", "Erilshimíbreg", "Dae-leene", "Halthacír", "Eär-tar", "Torortouilthorn",
      "Derorre", "Ros'uil", "Daemaris", "Virquinal", "Grekalyn", "Farnelis", "Iandove", "Nericyne", "Nerimoira", "Waesbalar", " Miagwyn",
      "Uldor ", "Nova", "Reyro ", "Redneth", "Zummoira", "Ash", "Do'he", "Olafaren"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    NumeroSortS = Math.floor(Math.random() * 26); // total 106
    this.NomeElfoGeradoCompleto = NomesListaElfo[NumeroSort] + " " + NomesListaSobrenomeElfo[NumeroSortS];

    var NomesListaOrc = ["Shazpe", "Ghadi", "Barociduk", "Bardoam", "Shulnearba", "Snaha", "Umugam", "Balu",
      "Ergak", "Plealgdu", "Veu", "Malkmub", "Mauhlehakh", "Muciurat", "Kagak", "Tupel", "Ogolwe", "Olfihabush", "Nodob",
      "Shobob ", "Thoroar", "Graros ", "Nomgulg", "Jureg", "Shrek", "Xujarek", "Nebuk"];

    var NomesListaSobrenomeOrc = ["Kurak", "Oradolug", "Foba", "Coish", "Dae", "Lurbuk", "tar", "Nagrtuzoa",
      "Derorre", "Ros", "Daemaris", "Virquinal", "Grekalyn", "Farnelis", "Iandove", "Nericyne", "Nerimoira",
      "Asrur", " Huarag",
      "Uldor ", "Khagro", "Reyro ", "Redneth", "Lurorieorn", "Foba", "Do", "Uslg"];
    //alert("tam: " + NomesListaOrc.length);
    NumeroSort = Math.floor(Math.random() * 26); // total 106
    NumeroSortS = Math.floor(Math.random() * 26); // total 106
    this.NomeOrcGeradoCompleto = NomesListaOrc[NumeroSort] + " " + NomesListaSobrenomeOrc[NumeroSortS];


    var NomesListaAnao = ["Elcuyfoa", "Erigu", "Immargdran", "Durierte", "Valbi", "Tolda", "Gnaua", "Darhrim",
      "Marghrim", "Nufaila", "Nuroak", "Ezegan", "Darthur", "Fallstili", "Glanoric", "artharn", "Therrim", "Bolain", "Azmoa",
      "Buizyuak ", "Delre", "Ryalayora", "Andoita", "Arxoent", "Poeain", "Azinkara", "Glorili"];
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
