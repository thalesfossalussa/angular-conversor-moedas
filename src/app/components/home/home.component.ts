import { Component, OnInit } from '@angular/core';

import { MoedasService } from './../moedas/moedas.service';
import { Conversao } from '../moedas/conversao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cotacaoReal: number = 0;
  cotacaoDolar: number = 0;

  constructor(private service: MoedasService) { }

  ngOnInit(): void {
    this.service.converter('BRL', 'USD').subscribe((conversao: Conversao) => {
      this.cotacaoDolar = conversao.result;
    })

    this.service.converter('USD', 'BRL').subscribe((conversao: Conversao) => {
      this.cotacaoReal = conversao.result;
    })
  }
}
