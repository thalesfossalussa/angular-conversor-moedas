import { MoedasService } from './../moedas.service';
import { Component, OnInit } from '@angular/core';
import { ListagemMoedas } from './listagem-moedas';


@Component({
  selector: 'app-listagem-moedas',
  templateUrl: './listagem-moedas.component.html',
  styleUrls: ['./listagem-moedas.component.css']
})
export class ListagemMoedasComponent implements OnInit{

  listagem: ListagemMoedas[] = [];
  tableColumns: string[] = ['code', 'description'];

  constructor(private service: MoedasService) { }

  ngOnInit(): void {
    this.service.ultimaCotacao().subscribe((resultado) => {
      this.listagem = Object.values(resultado.symbols);
    })
  }

}
