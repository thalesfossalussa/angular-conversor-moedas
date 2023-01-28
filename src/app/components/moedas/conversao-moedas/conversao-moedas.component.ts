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
      amount: 1,
      rate: 0,
      date: new Date(),
      result: 0
    }

    this.service.listarMoedas().subscribe((lista) => {
      this.listagem = Object.values(lista.symbols);
    })
  }

  converter(frm: NgForm) {
    this.erro = false;
    if (this.amount <= 0) this.amount = 1;
    if (this.from && this.to) {
      return this.service.converter(this.from, this.to, this.amount).subscribe((conversao) => {
        this.moedaConvertida.from = conversao.query.from;
        this.moedaConvertida.to = conversao.query.to;
        this.moedaConvertida.amount = conversao.query.amount;
        this.moedaConvertida.rate = conversao.info.rate;
        this.moedaConvertida.date = conversao.date;
        this.moedaConvertida.result = conversao.result;


        frm.form.reset();
      })
    }

    return this.erro = true
  }
}