import { ConversaoRaw } from '../../moedas/interfaces/conversao-raw';
import { MoedasService } from './../../moedas/services/moedas.service';
import { Component, OnInit } from '@angular/core';

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
    this.service.converter('BRL', 'USD').subscribe((conversao: ConversaoRaw) => {
      this.cotacaoDolar = conversao.result;
    })

    this.service.converter('USD', 'BRL').subscribe((conversao: ConversaoRaw) => {
      this.cotacaoReal = conversao.result;
    })
  }
}
