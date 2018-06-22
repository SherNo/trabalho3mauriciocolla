import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Anderson Rodrigues de Almeida';
  public nome:string = "";
  public numero1: number = 0;
  public numero2: number = 0;
  //utiliza o | para definir uma variável com mais de 1 tipo
  public resultado: number|string|any = 0;
  public operacao:string = '+';

  public calcular(){
    switch (this.operacao){
      case '+': case 'somar':
        this.somar();
        break;
      case '*':
        this.multiplicar();
        break;
      case '-':
        this.subtrair();
        break;
      case '/':
        this.dividir();
        break;
      default:
        this.resultado = 'não soube usar o sistema!';
        alert('leitão');
        break;
    }
  }

  public mostrar(){
    console.log(this.nome);
    alert(this.nome);
    alert('Até aqui tudo funcionando!');
  }

  public somar(){
    this.resultado = parseFloat(this.numero1+"") + parseFloat(this.numero2.toString());
  }

  public multiplicar(){
    this.resultado = parseFloat(this.numero1+"") * parseFloat(this.numero2+"");
  }

  public subtrair(){

    

    this.resultado = parseFloat(this.numero1+"") - parseFloat(this.numero2+"");
  }

  public dividir(){
    this.resultado = parseFloat(this.numero1+"") / parseFloat(this.numero2+"");
  }
  

}
