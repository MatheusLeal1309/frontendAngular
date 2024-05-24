import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nomeProoduto: string = "Curso de angular";
  anuncio: string = `O ${this.nomeProoduto} está em promoção`;
  idProduto: number = 3
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png'
  dataValidade = '2024-12-22'

  constructor() {

    //this.anuncio = `O` + this.nomeProoduto + 'está em promoção';
    console.log('Nome do Produto: ', this.nomeProoduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

    var vari1;
    var vari2;

    var idade = 23
    console.log('Minha idade é: ', idade);

    /*  function imprimeIdade() {
        var idade 50
        console.log('Minha idade é: ', idade)
      }
      imprimeIdade()

      function imprimeIdade() {
        for (let idade = 30; idade >= 40; idade--){
          console.log('Idade dentro do for: ', idade)
        }
        console.log('Idade fora do for: ', idade)
      }
      imprimeIdade()

      var variavel = 0;
      var variavel = 10;
      console.log('variável', variavel);
      function funcao() {
        var outra_variavel = 20;
        var outra_variavel = 30;
        console.log('outra variável:', outra_variavel);
      }
      funcao();
  */
    /*
        var a = 10;
        var b = 20;
        function bar() {
          var a = 30;
          let b = 40;
          if(true) {
            var a = 50;
            let b = 60;
            console.log('Variavel a dentro do if', a);
            console.log('variavel b dentro do if', b);
          }
          console.log('variavel a dentro da função', a);
          console.log('variavel b dentro da função', b);
        }
        bar();
        console.log('variavel a fora da função', a);
        console.log('variavel b fora da função,', b);
    */


    /*
        let a = 1;
        function bar() {
          console.log('variavel a: ', a);
          let b = 2;
          if(true) {
            let c = 3;
            let a = 4;
            console.log('variável a dentro do if;', a)
            console.log('variável b dentro do if;', b);
            console.log('variável c dentro do if;', c);
          }
          console.log('variavel a fora do if: ', a);
          console.log('variavel b fora do if: ', b);
          //console.log(c);
        }
        bar();
        */

    var a = 5;
    var b = 10;
    if (a = 5) {
      let a = 4;
      var b = 1;
      console.log('variavel a dentro do if: ', a);
      console.log('variavel b dentro do if: ', b);
    }
    console.log('variavel a fora do if: ', a);
    console.log('variavel b fora do if: ', b);
  }

}
