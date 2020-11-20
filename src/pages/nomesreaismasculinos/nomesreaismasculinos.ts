import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NomesreaismasculinosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomesreaismasculinos',
  templateUrl: 'nomesreaismasculinos.html',
})
export class NomesreaismasculinosPage {

  NomeSimplesGerado: any;
  NomeSimplesCompletoGerado: any;
  NomeCompostoGerado: any;
  NomeCompostoCompletoGerado: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.NomeSimplesGerado = "Gere um nome";
    this.NomeCompostoGerado = "Gere um nome";

    this.NomeCompostoCompletoGerado = "Gere um nome";
    this.NomeSimplesCompletoGerado = "Gere um nome";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NomesreaismasculinosPage');
  }


  gerarNomeSimples() {

    var NomesLista = ["Alexandre", "Arthur", "Carlos", "Luiz", "Miguel", "Gabriel", "Eduardo", "Henrique", "Murilo", "Gregório", "Bartolomeu",
      "Theo", "André", "Enrico", "Henry", "Nathan", "Thiago", "Antônio", "Lince", "Tomé", "Gaspar", "Zion",
      "Enzo", "Benito", "Calebe", "Ian", "Otávio", "Thomas", "Davi", "Ciro", "Santiago", "Conrado", "Vince",
      "Inácio", "Augusto", "Antony", "Benício", "Erick", "Isaac", "Pietro", "Vicente", "Salomão", "Gregório", "Gaspar",
      "Breno", "Felipe", "Serafim", "João", "Rafael", "Franco", "Vinícius", "Amado", "Nicolas", "Valentino", "Oscar", "Ruan", "Ernesto",
      "Bruno", "Fernando", "Álvaro", "Dimitri", "Kaique", "Raul", "Vitor", "Pedro", "Lourenço", "Ícaro", "Bento",
      "Emanuel", "Caio", "Francisco", "Hermano", "Leonardo", "Rian", "Yago", "Lino", "Cristovão", "Martim", "Noah",
      "Cauã", "Dante", "Frederico", "Luan", "Ricardo", "Ygor", "Romeu", "Gonçalo", "Nuno",
      "Daniel", "Guilherme", "Levi", "Lucas", "Rodrigo", "Yuri", "Hugo", "Gael", "Guilhermo", "Benedito", "Oliver",
      "Danilo", "Gustavo", "Mathias", "Benjamin", "Tadeu", "Cícero", "Samuel", "Dom"];
    let NumeroSort = Math.floor(Math.random() * 105); // total 106
    this.NomeSimplesGerado = NomesLista[NumeroSort];
  }

  gerarNomeSimplesCompleto() {
    var NomesLista = ["Alexandre", "Arthur", "Carlos", "Luiz", "Miguel", "Gabriel", "Eduardo", "Henrique", "Murilo", "Gregório", "Bartolomeu",
      "Theo", "André", "Enrico", "Henry", "Nathan", "Thiago", "Antônio", "Lince", "Tomé", "Gaspar", "Zion",
      "Enzo", "Benito", "Calebe", "Ian", "Otávio", "Thomas", "Davi", "Ciro", "Santiago", "Conrado", "Vince",
      "Inácio", "Augusto", "Antony", "Benício", "Erick", "Isaac", "Pietro", "Vicente", "Salomão", "Gregório", "Gaspar",
      "Breno", "Felipe", "Serafim", "João", "Rafael", "Franco", "Vinícius", "Amado", "Nicolas", "Valentino", "Oscar", "Ruan", "Ernesto",
      "Bruno", "Fernando", "Álvaro", "Dimitri", "Kaique", "Raul", "Vitor", "Pedro", "Lourenço", "Ícaro", "Bento",
      "Emanuel", "Caio", "Francisco", "Hermano", "Leonardo", "Rian", "Yago", "Lino", "Cristovão", "Martim", "Noah",
      "Cauã", "Dante", "Frederico", "Luan", "Ricardo", "Ygor", "Romeu", "Gonçalo", "Nuno",
      "Daniel", "Guilherme", "Levi", "Lucas", "Rodrigo", "Yuri", "Hugo", "Gael", "Guilhermo", "Benedito", "Oliver",
      "Danilo", "Gustavo", "Mathias", "Benjamin", "Tadeu", "Cícero", "Samuel", "Dom"];

    var SobrenomeLista = ["Andrade", "Silva", "Aparecido", "Souza", "Batista", "Costa", "Santos", "Oliveira", "Pereira", "Nunes", "Rodrigues", "Almeida", "Soares", "Conceição", "Santana",
      "Nascimento", "Lima", "Araújo", "Fernandes", "Ramos", "Gonçalves", "Carvalho", "Gomes", "Martins", "Rocha", "Moreira", "Ribeiro", "Alves", "Marques", "Borges", "Nogueira",
      "Vieira", "Monteiro", "Teixeira", "Mendes", "Araujo", "Leite", "Barros", "Pinheiro", "Freitas", "Barbosa", "Pinto", "Sousa", "Lopes", "Moura", "Cavalcanti", "Dias", "Castro",
      "Campos", "Bezerra", "Correa", "Cardoso", "Ferreira", "Machado", "Garcia", "Henrique", "Tavares", "Coelho", "Pires", "Paula", "Correia", "Miranda", "Jesus", "Sántos", "Melo", "Cruz",
      "Reis", "Guimaraes", "Moraes", "Carmo", "Viana", "Silveira", "Brito", "Neves", "Carneiro", "Medeiros", "Cordeiro", "Farias", "Dantas", "Cavalcante", "Assis", "Braga", "Siqueira", "Nobre"];

    //  this.NomeSimplesCompletoGerado = SobrenomeLista.length;
    let NumeroSort = Math.floor(Math.random() * 105); // total 106
    let NumeroSortP = Math.floor(Math.random() * 84); // total 85
    let NumeroSortS = Math.floor(Math.random() * 84); // total 85
    this.NomeSimplesCompletoGerado = NomesLista[NumeroSort] + " " + SobrenomeLista[NumeroSortP] + " " + SobrenomeLista[NumeroSortS];


  }


  gerarNomeComposto() {
    var NomesListaP = ["Alexandre", "Arthur", "Carlos", "Luiz", "Miguel", "Gabriel", "Eduardo", "Henrique", "Murilo", "Gregório", "Bartolomeu",
      "Theo", "André", "Enrico", "Henry", "Nathan", "Thiago", "Antônio", "Lince", "Tomé", "Gaspar", "Zion",
      "Enzo", "Benito", "Calebe", "Ian", "Otávio", "Thomas", "Davi", "Ciro", "Santiago", "Conrado", "Vince",
      "Inácio", "Augusto", "Antony", "Benício", "Erick", "Isaac", "Pietro", "Vicente", "Salomão", "Gregório", "Gaspar",
      "Breno", "Felipe", "Serafim", "João", "Rafael", "Franco", "Vinícius", "Amado", "Nicolas", "Valentino", "Oscar", "Ruan", "Ernesto",
      "Bruno", "Fernando", "Álvaro", "Dimitri", "Kaique", "Raul", "Vitor", "Pedro", "Lourenço", "Ícaro", "Bento",
      "Emanuel", "Caio", "Francisco", "Hermano", "Leonardo", "Rian", "Yago", "Lino", "Cristovão", "Martim", "Noah",
      "Cauã", "Dante", "Frederico", "Luan", "Ricardo", "Ygor", "Romeu", "Gonçalo", "Nuno",
      "Daniel", "Guilherme", "Levi", "Lucas", "Rodrigo", "Yuri", "Hugo", "Gael", "Guilhermo", "Benedito", "Oliver",
      "Danilo", "Gustavo", "Mathias", "Benjamin", "Tadeu", "Cícero", "Samuel", "Dom"];

    var NomesListaS = ["Alexandre", "Arthur", "Carlos", "Luiz", "Miguel", "Gabriel", "Eduardo", "Henrique", "Murilo", "Gregório", "Bartolomeu",
      "Theo", "André", "Enrico", "Henry", "Nathan", "Thiago", "Antônio", "Lince", "Tomé", "Gaspar", "Zion",
      "Enzo", "Benito", "Calebe", "Ian", "Otávio", "Thomas", "Davi", "Ciro", "Santiago", "Conrado", "Vince",
      "Inácio", "Augusto", "Antony", "Benício", "Erick", "Isaac", "Pietro", "Vicente", "Salomão", "Gregório", "Gaspar",
      "Breno", "Felipe", "Serafim", "João", "Rafael", "Franco", "Vinícius", "Amado", "Nicolas", "Valentino", "Oscar", "Ruan", "Ernesto",
      "Bruno", "Fernando", "Álvaro", "Dimitri", "Kaique", "Raul", "Vitor", "Pedro", "Lourenço", "Ícaro", "Bento",
      "Emanuel", "Caio", "Francisco", "Hermano", "Leonardo", "Rian", "Yago", "Lino", "Cristovão", "Martim", "Noah",
      "Cauã", "Dante", "Frederico", "Luan", "Ricardo", "Ygor", "Romeu", "Gonçalo", "Nuno",
      "Daniel", "Guilherme", "Levi", "Lucas", "Rodrigo", "Yuri", "Hugo", "Gael", "Guilhermo", "Benedito", "Oliver",
      "Danilo", "Gustavo", "Mathias", "Benjamin", "Tadeu", "Cícero", "Samuel", "Dom"];

    let NumeroSortP = Math.floor(Math.random() * 105); // total 106
    let NumeroSortS = Math.floor(Math.random() * 105); // total 106

    this.NomeCompostoGerado = NomesListaP[NumeroSortP] + " " + NomesListaS[NumeroSortS];

  }


  gerarNomeCompostoCompleto() {

    var NomesListaP = ["Alexandre", "Arthur", "Carlos", "Luiz", "Miguel", "Gabriel", "Eduardo", "Henrique", "Murilo", "Gregório", "Bartolomeu",
      "Theo", "André", "Enrico", "Henry", "Nathan", "Thiago", "Antônio", "Lince", "Tomé", "Gaspar", "Zion",
      "Enzo", "Benito", "Calebe", "Ian", "Otávio", "Thomas", "Davi", "Ciro", "Santiago", "Conrado", "Vince",
      "Inácio", "Augusto", "Antony", "Benício", "Erick", "Isaac", "Pietro", "Vicente", "Salomão", "Gregório", "Gaspar",
      "Breno", "Felipe", "Serafim", "João", "Rafael", "Franco", "Vinícius", "Amado", "Nicolas", "Valentino", "Oscar", "Ruan", "Ernesto",
      "Bruno", "Fernando", "Álvaro", "Dimitri", "Kaique", "Raul", "Vitor", "Pedro", "Lourenço", "Ícaro", "Bento",
      "Emanuel", "Caio", "Francisco", "Hermano", "Leonardo", "Rian", "Yago", "Lino", "Cristovão", "Martim", "Noah",
      "Cauã", "Dante", "Frederico", "Luan", "Ricardo", "Ygor", "Romeu", "Gonçalo", "Nuno",
      "Daniel", "Guilherme", "Levi", "Lucas", "Rodrigo", "Yuri", "Hugo", "Gael", "Guilhermo", "Benedito", "Oliver",
      "Danilo", "Gustavo", "Mathias", "Benjamin", "Tadeu", "Cícero", "Samuel", "Dom"];

    var NomesListaS = ["Alexandre", "Arthur", "Carlos", "Luiz", "Miguel", "Gabriel", "Eduardo", "Henrique", "Murilo", "Gregório", "Bartolomeu",
      "Theo", "André", "Enrico", "Henry", "Nathan", "Thiago", "Antônio", "Lince", "Tomé", "Gaspar", "Zion",
      "Enzo", "Benito", "Calebe", "Ian", "Otávio", "Thomas", "Davi", "Ciro", "Santiago", "Conrado", "Vince",
      "Inácio", "Augusto", "Antony", "Benício", "Erick", "Isaac", "Pietro", "Vicente", "Salomão", "Gregório", "Gaspar",
      "Breno", "Felipe", "Serafim", "João", "Rafael", "Franco", "Vinícius", "Amado", "Nicolas", "Valentino", "Oscar", "Ruan", "Ernesto",
      "Bruno", "Fernando", "Álvaro", "Dimitri", "Kaique", "Raul", "Vitor", "Pedro", "Lourenço", "Ícaro", "Bento",
      "Emanuel", "Caio", "Francisco", "Hermano", "Leonardo", "Rian", "Yago", "Lino", "Cristovão", "Martim", "Noah",
      "Cauã", "Dante", "Frederico", "Luan", "Ricardo", "Ygor", "Romeu", "Gonçalo", "Nuno",
      "Daniel", "Guilherme", "Levi", "Lucas", "Rodrigo", "Yuri", "Hugo", "Gael", "Guilhermo", "Benedito", "Oliver",
      "Danilo", "Gustavo", "Mathias", "Benjamin", "Tadeu", "Cícero", "Samuel", "Dom"];

    var SobrenomeLista = ["Andrade", "Silva", "Aparecido", "Souza", "Batista", "Costa", "Santos", "Oliveira", "Pereira", "Nunes", "Rodrigues", "Almeida", "Soares", "Conceição", "Santana",
      "Nascimento", "Lima", "Araújo", "Fernandes", "Ramos", "Gonçalves", "Carvalho", "Gomes", "Martins", "Rocha", "Moreira", "Ribeiro", "Alves", "Marques", "Borges", "Nogueira",
      "Vieira", "Monteiro", "Teixeira", "Mendes", "Araujo", "Leite", "Barros", "Pinheiro", "Freitas", "Barbosa", "Pinto", "Sousa", "Lopes", "Moura", "Cavalcanti", "Dias", "Castro",
      "Campos", "Bezerra", "Correa", "Cardoso", "Ferreira", "Machado", "Garcia", "Henrique", "Tavares", "Coelho", "Pires", "Paula", "Correia", "Miranda", "Jesus", "Sántos", "Melo", "Cruz",
      "Reis", "Guimaraes", "Moraes", "Carmo", "Viana", "Silveira", "Brito", "Neves", "Carneiro", "Medeiros", "Cordeiro", "Farias", "Dantas", "Cavalcante", "Assis", "Braga", "Siqueira", "Nobre"];


    let NumeroSortP = Math.floor(Math.random() * 105); // total 106
    let NumeroSortS = Math.floor(Math.random() * 105); // total 106
    let SobrenomeNumeroSortP = Math.floor(Math.random() * 84); // total 85
    let SobrenomeNumeroSortS = Math.floor(Math.random() * 84); // total 85

    this.NomeCompostoCompletoGerado = NomesListaP[NumeroSortP] + " " + NomesListaS[NumeroSortS] + " " + SobrenomeLista[SobrenomeNumeroSortP] + " " + SobrenomeLista[SobrenomeNumeroSortS];

  }


  // varSobreNomeLista



}
