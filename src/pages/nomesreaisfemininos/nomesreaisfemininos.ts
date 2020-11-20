import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NomesreaisfemininosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomesreaisfemininos',
  templateUrl: 'nomesreaisfemininos.html',
})
export class NomesreaisfemininosPage {

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
    console.log('ionViewDidLoad NomesreaisfemininosPage');
  }


  gerarNomeSimples() {



    var NomesLista = ["Ana", "Beatriz", "Maria", "Eduarda", "Cecília", "Flor", "Fernanda", "Clara", "Júlia",
      "Helena", "Laura", "Isis", "Lívia", "Luiza", "Sofia", "Vitória", "Alice", "Sophia", "Valentina",
      "Açucena", "Augusta", "Coralina", "Hortênsia", "Martina", "Pilar",
      "Adele", "Ayla", "Dora", "Iolanda", "Matilda", "Ramona",
      "Agnes", "Benedita", "Eleonara", "Julieta", "Melina", "Serena",
      "Alegra", "Betina", "Esperança", "Lia", "Mia", "Tarsila",
      "Allana", "Branca", "Estrela", "Linda", "Micaela", "Teodora",
      "Amélia", "Caetana", "Felipa", "Lolita", "Naomi", "Úrsula",
      "Amora", "Carlota", "Flora", "Louise", "Olga", "Vida",
      "Anabel", "Celina", "Florença", "Luna", "Pandora", "Violeta",
      "Analu", "Charlote", "Frederica", "Mabel", "Penélope", "Zoé",
      "Anastácia", "Constança", "Gaia", "Maia", "Pérola",
      "Angelina", "Cora", "Guadalupe", "Margarida", "Petra"
    ];
    let NumeroSort = Math.floor(Math.random() * 82); // total 106
    this.NomeSimplesGerado = NomesLista[NumeroSort];
    // alert("tam: " + NomesLista.length);
  }

  gerarNomeSimplesCompleto() {
    var NomesLista = ["Ana", "Beatriz", "Maria", "Eduarda", "Cecília", "Flor", "Fernanda", "Clara", "Júlia",
      "Helena", "Laura", "Isis", "Lívia", "Luiza", "Sofia", "Vitória", "Alice", "Sophia", "Valentina",
      "Açucena", "Augusta", "Coralina", "Hortênsia", "Martina", "Pilar",
      "Adele", "Ayla", "Dora", "Iolanda", "Matilda", "Ramona",
      "Agnes", "Benedita", "Eleonara", "Julieta", "Melina", "Serena",
      "Alegra", "Betina", "Esperança", "Lia", "Mia", "Tarsila",
      "Allana", "Branca", "Estrela", "Linda", "Micaela", "Teodora",
      "Amélia", "Caetana", "Felipa", "Lolita", "Naomi", "Úrsula",
      "Amora", "Carlota", "Flora", "Louise", "Olga", "Vida",
      "Anabel", "Celina", "Florença", "Luna", "Pandora", "Violeta",
      "Analu", "Charlote", "Frederica", "Mabel", "Penélope", "Zoé",
      "Anastácia", "Constança", "Gaia", "Maia", "Pérola",
      "Angelina", "Cora", "Guadalupe", "Margarida", "Petra"];

    var SobrenomeLista = ["Andrade", "Silva", "Aparecido", "Souza", "Batista", "Costa", "Santos", "Oliveira", "Pereira", "Nunes", "Rodrigues", "Almeida", "Soares", "Conceição", "Santana",
      "Nascimento", "Lima", "Araújo", "Fernandes", "Ramos", "Gonçalves", "Carvalho", "Gomes", "Martins", "Rocha", "Moreira", "Ribeiro", "Alves", "Marques", "Borges", "Nogueira",
      "Vieira", "Monteiro", "Teixeira", "Mendes", "Araujo", "Leite", "Barros", "Pinheiro", "Freitas", "Barbosa", "Pinto", "Sousa", "Lopes", "Moura", "Cavalcanti", "Dias", "Castro",
      "Campos", "Bezerra", "Correa", "Cardoso", "Ferreira", "Machado", "Garcia", "Henrique", "Tavares", "Coelho", "Pires", "Paula", "Correia", "Miranda", "Jesus", "Sántos", "Melo", "Cruz",
      "Reis", "Guimaraes", "Moraes", "Carmo", "Viana", "Silveira", "Brito", "Neves", "Carneiro", "Medeiros", "Cordeiro", "Farias", "Dantas", "Cavalcante", "Assis", "Braga", "Siqueira", "Nobre"];

    //  this.NomeSimplesCompletoGerado = SobrenomeLista.length;
    let NumeroSort = Math.floor(Math.random() * 82); // total 106
    let NumeroSortP = Math.floor(Math.random() * 84); // total 85
    let NumeroSortS = Math.floor(Math.random() * 84); // total 85
    this.NomeSimplesCompletoGerado = NomesLista[NumeroSort] + " " + SobrenomeLista[NumeroSortP] + " " + SobrenomeLista[NumeroSortS];


  }


  gerarNomeComposto() {
    var NomesListaP = ["Ana", "Beatriz", "Maria", "Eduarda", "Cecília", "Flor", "Fernanda", "Clara", "Júlia",
      "Helena", "Laura", "Isis", "Lívia", "Luiza", "Sofia", "Vitória", "Alice", "Sophia", "Valentina",
      "Açucena", "Augusta", "Coralina", "Hortênsia", "Martina", "Pilar",
      "Adele", "Ayla", "Dora", "Iolanda", "Matilda", "Ramona",
      "Agnes", "Benedita", "Eleonara", "Julieta", "Melina", "Serena",
      "Alegra", "Betina", "Esperança", "Lia", "Mia", "Tarsila",
      "Allana", "Branca", "Estrela", "Linda", "Micaela", "Teodora",
      "Amélia", "Caetana", "Felipa", "Lolita", "Naomi", "Úrsula",
      "Amora", "Carlota", "Flora", "Louise", "Olga", "Vida",
      "Anabel", "Celina", "Florença", "Luna", "Pandora", "Violeta",
      "Analu", "Charlote", "Frederica", "Mabel", "Penélope", "Zoé",
      "Anastácia", "Constança", "Gaia", "Maia", "Pérola",
      "Angelina", "Cora", "Guadalupe", "Margarida", "Petra"];

    var NomesListaS = ["Ana", "Beatriz", "Maria", "Eduarda", "Cecília", "Flor", "Fernanda", "Clara", "Júlia",
      "Helena", "Laura", "Isis", "Lívia", "Luiza", "Sofia", "Vitória", "Alice", "Sophia", "Valentina",
      "Açucena", "Augusta", "Coralina", "Hortênsia", "Martina", "Pilar",
      "Adele", "Ayla", "Dora", "Iolanda", "Matilda", "Ramona",
      "Agnes", "Benedita", "Eleonara", "Julieta", "Melina", "Serena",
      "Alegra", "Betina", "Esperança", "Lia", "Mia", "Tarsila",
      "Allana", "Branca", "Estrela", "Linda", "Micaela", "Teodora",
      "Amélia", "Caetana", "Felipa", "Lolita", "Naomi", "Úrsula",
      "Amora", "Carlota", "Flora", "Louise", "Olga", "Vida",
      "Anabel", "Celina", "Florença", "Luna", "Pandora", "Violeta",
      "Analu", "Charlote", "Frederica", "Mabel", "Penélope", "Zoé",
      "Anastácia", "Constança", "Gaia", "Maia", "Pérola",
      "Angelina", "Cora", "Guadalupe", "Margarida", "Petra"];

    let NumeroSortP = Math.floor(Math.random() * 82); // total 106
    let NumeroSortS = Math.floor(Math.random() * 82); // total 106

    this.NomeCompostoGerado = NomesListaP[NumeroSortP] + " " + NomesListaS[NumeroSortS];

  }


  gerarNomeCompostoCompleto() {

    var NomesListaP = ["Ana", "Beatriz", "Maria", "Eduarda", "Cecília", "Flor", "Fernanda", "Clara", "Júlia",
      "Helena", "Laura", "Isis", "Lívia", "Luiza", "Sofia", "Vitória", "Alice", "Sophia", "Valentina",
      "Açucena", "Augusta", "Coralina", "Hortênsia", "Martina", "Pilar",
      "Adele", "Ayla", "Dora", "Iolanda", "Matilda", "Ramona",
      "Agnes", "Benedita", "Eleonara", "Julieta", "Melina", "Serena",
      "Alegra", "Betina", "Esperança", "Lia", "Mia", "Tarsila",
      "Allana", "Branca", "Estrela", "Linda", "Micaela", "Teodora",
      "Amélia", "Caetana", "Felipa", "Lolita", "Naomi", "Úrsula",
      "Amora", "Carlota", "Flora", "Louise", "Olga", "Vida",
      "Anabel", "Celina", "Florença", "Luna", "Pandora", "Violeta",
      "Analu", "Charlote", "Frederica", "Mabel", "Penélope", "Zoé",
      "Anastácia", "Constança", "Gaia", "Maia", "Pérola",
      "Angelina", "Cora", "Guadalupe", "Margarida", "Petra"];

    var NomesListaS = ["Ana", "Beatriz", "Maria", "Eduarda", "Cecília", "Flor", "Fernanda", "Clara", "Júlia",
      "Helena", "Laura", "Isis", "Lívia", "Luiza", "Sofia", "Vitória", "Alice", "Sophia", "Valentina",
      "Açucena", "Augusta", "Coralina", "Hortênsia", "Martina", "Pilar",
      "Adele", "Ayla", "Dora", "Iolanda", "Matilda", "Ramona",
      "Agnes", "Benedita", "Eleonara", "Julieta", "Melina", "Serena",
      "Alegra", "Betina", "Esperança", "Lia", "Mia", "Tarsila",
      "Allana", "Branca", "Estrela", "Linda", "Micaela", "Teodora",
      "Amélia", "Caetana", "Felipa", "Lolita", "Naomi", "Úrsula",
      "Amora", "Carlota", "Flora", "Louise", "Olga", "Vida",
      "Anabel", "Celina", "Florença", "Luna", "Pandora", "Violeta",
      "Analu", "Charlote", "Frederica", "Mabel", "Penélope", "Zoé",
      "Anastácia", "Constança", "Gaia", "Maia", "Pérola",
      "Angelina", "Cora", "Guadalupe", "Margarida", "Petra"];

    var SobrenomeLista = ["Andrade", "Silva", "Aparecido", "Souza", "Batista", "Costa", "Santos", "Oliveira", "Pereira", "Nunes", "Rodrigues", "Almeida", "Soares", "Conceição", "Santana",
      "Nascimento", "Lima", "Araújo", "Fernandes", "Ramos", "Gonçalves", "Carvalho", "Gomes", "Martins", "Rocha", "Moreira", "Ribeiro", "Alves", "Marques", "Borges", "Nogueira",
      "Vieira", "Monteiro", "Teixeira", "Mendes", "Araujo", "Leite", "Barros", "Pinheiro", "Freitas", "Barbosa", "Pinto", "Sousa", "Lopes", "Moura", "Cavalcanti", "Dias", "Castro",
      "Campos", "Bezerra", "Correa", "Cardoso", "Ferreira", "Machado", "Garcia", "Henrique", "Tavares", "Coelho", "Pires", "Paula", "Correia", "Miranda", "Jesus", "Sántos", "Melo", "Cruz",
      "Reis", "Guimaraes", "Moraes", "Carmo", "Viana", "Silveira", "Brito", "Neves", "Carneiro", "Medeiros", "Cordeiro", "Farias", "Dantas", "Cavalcante", "Assis", "Braga", "Siqueira", "Nobre"];


    let NumeroSortP = Math.floor(Math.random() * 82); // total 106
    let NumeroSortS = Math.floor(Math.random() * 82); // total 106
    let SobrenomeNumeroSortP = Math.floor(Math.random() * 84); // total 85
    let SobrenomeNumeroSortS = Math.floor(Math.random() * 84); // total 85

    this.NomeCompostoCompletoGerado = NomesListaP[NumeroSortP] + " " + NomesListaS[NumeroSortS] + " " + SobrenomeLista[SobrenomeNumeroSortP] + " " + SobrenomeLista[SobrenomeNumeroSortS];

  }


  // varSobreNomeLista


}
