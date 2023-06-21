import { Component } from '@angular/core';

@Component({
  selector: 'app-cientifica',
  templateUrl: './cientifica.component.html',
  styleUrls: ['./cientifica.component.css'],
})
export class CientificaComponent {
  numero: Number = 0;
  save_num: Number = 0;
  num_q_aparece: Number = 0;
  dig_decimais: Number = 1;
  operador: String = '';
  decimal: boolean = false;

  apertou_n(n: Number): void {
    if (this.decimal === false) {
      this.numero = Number(this.numero) * 10 + Number(n);
    } else if (this.decimal === true) {
      this.dig_decimais = Number(this.dig_decimais) * Number(10);
      this.numero =
        Number(this.numero) +
        Number(n) * Number(Number(1) / Number(this.dig_decimais));
    }
    this.num_q_aparece = this.numero;
  }
  apertou_op(s: string): void {
    if (this.save_num !== 0) {
      this.apertou_igual();
    }
    this.operador = s;
    this.save_num = this.numero;
    this.numero = 0;
    this.decimal = false;
    this.dig_decimais = 1;
  }

  apertou_limpar(): void {
    this.save_num = 0;
    this.numero = 0;
    this.operador = '';
    this.decimal = false;
    this.dig_decimais = 1;
    this.num_q_aparece = this.numero;
  }

  apertou_igual(): void {
    if (this.operador === '+') {
      this.numero = Number(this.save_num) + Number(this.numero);
    } else if (this.operador === '-') {
      this.numero = Number(this.save_num) - Number(this.numero);
    } else if (this.operador === 'x') {
      this.numero = Number(this.save_num) * Number(this.numero);
    } else if (this.operador === '/') {
      this.numero = Number(this.save_num) / Number(this.numero);
    } else if (this.operador === '%') {
      this.numero = (Number(this.save_num) / Number(100)) * Number(this.numero);
    } else if (this.operador === 'raiz') {
      this.numero = Math.sqrt(Number(this.numero));
    } else if (this.operador === 'log') {
      this.numero = Math.log10(Number(this.numero));
    } else if (this.operador === 'sin') {
      var rad = (Number(this.numero) * Math.PI) / 180;
      this.numero = Math.sin(rad);
    } else if (this.operador === 'cos') {
      var rad = (Number(this.numero) * Math.PI) / 180;
      this.numero = Math.cos(rad);
    } else if (this.operador === 'tan') {
      var rad = (Number(this.numero) * Math.PI) / 180;
      this.numero = Math.tan(rad);
    } else if (this.operador === 'pi') {
      this.numero = Math.PI;
    } else if (this.operador === 'fato') {
      this.save_num = 1;
      if (this.decimal === true) {
        this.numero = 0;
      } else {
        for (let i = this.numero; i > 0; i = Number(i) - 1) {
          this.save_num = Number(this.save_num) * Number(i);
        }
        this.numero = this.save_num;
        this.save_num = 0;
      }
    }
    this.numero = Number(this.numero) * 1000000;
    this.numero = Math.round(Number(this.numero));
    this.numero = Number(this.numero) / 1000000;
    this.save_num = 0;
    this.num_q_aparece = this.numero;
    this.decimal = false;
    this.dig_decimais = 1;
  }

  apertou_dec(): void {
    if (this.decimal === false) {
      this.decimal = true;
      this.dig_decimais = 1;
    }
  }
}
