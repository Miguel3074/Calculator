import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
    }
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
