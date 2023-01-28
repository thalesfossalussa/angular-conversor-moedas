import { Observable } from 'rxjs';
import { MoedaConvertida } from './moeda-convertida';
import { ListagemMoedas } from './../listagem-moedas/listagem-moedas';
import { MoedasService } from './../moedas.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversao-moedas',
  templateUrl: './conversao-moedas.component.html',
  styleUrls: ['./conversao-moedas.component.css']
})
export class ConversaoMoedasComponent implements OnInit {

  listagem!: ListagemMoedas[];
  moedaConvertida!: MoedaConvertida;
  from!: string;
  to!: string;
  amount!: number;
  erro: boolean = false;

  constructor(private service: MoedasService) { }

  ngOnInit(): void {
    this.moedaConvertida = {
      from: '',
      to: '',
      amount: 0,
      rate: 0,
      data: '',
      hora: '',
      result: 0,
    }
    this.service.listarMoedas().subscribe((lista) => {
      this.listagem = Object.values(lista.symbols);
    })
  }

  converter(frm: NgForm) {
    this.erro = false;
    if (this.amount <= 0) this.amount = 1;
    if (this.from && this.to) {
      this.service.converter(this.from, this.to, this.amount).subscribe((conversao) => {
        this.moedaConvertida.from = conversao.query.from;
        this.moedaConvertida.to = conversao.query.to;
        this.moedaConvertida.amount = conversao.query.amount;
        this.moedaConvertida.rate = conversao.info.rate;
        this.moedaConvertida.data = this.definirData(new Date());
        this.moedaConvertida.hora = this.definirHora(new Date());
        this.moedaConvertida.result = conversao.result;


        this.addHistorico(this.moedaConvertida);
      })
      frm.form.reset();

      return this.erro = false
    }

    return this.erro = true
  }

  addHistorico(novaConversao: MoedaConvertida) {
    const historico: MoedaConvertida[] = JSON.parse(sessionStorage.getItem("conversoes") || "[]");

    historico.push(novaConversao);
    sessionStorage.setItem('conversoes', JSON.stringify(historico));
  }

  definirData(data: Date): string {
    let dia: string;
    let mes: string;

    if(data.getDate() < 10) dia = `0${data.getDate()}`;
    else dia = `${data.getDate()}`;

    if((data.getMonth() + 1) < 10) mes = `0${(data.getMonth() + 1)}`;
    else mes = `${data.getMonth()}`;

    return `${dia}/${mes}/${data.getFullYear()}`;
  }

  definirHora(data: Date): string {
    let horas: string;
    let minutos: string;

    if(data.getHours() < 10) horas = `0${data.getHours()}`;
    else horas = `${data.getHours()}`;

    if(data.getMinutes() < 10) minutos = `0${data.getMinutes()}`;
    else minutos = `${data.getMinutes()}`;

    return `${horas}:${minutos}`
  }
}
