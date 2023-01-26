import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MoedasService } from './../moedas.service';
import { ListagemMoedas } from './listagem-moedas';


@Component({
  selector: 'app-listagem-moedas',
  templateUrl: './listagem-moedas.component.html',
  styleUrls: ['./listagem-moedas.component.css']
})
export class ListagemMoedasComponent implements OnInit, AfterViewInit{

  listagem = new MatTableDataSource<ListagemMoedas>([]);
  tableColumns: string[] = ['code', 'description'];

  constructor(private service: MoedasService) { }

  ngOnInit(): void {
    this.service.ultimaCotacao().subscribe((resultado) => {
      this.listagem.data = Object.values(resultado.symbols);
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.listagem.paginator = this.paginator;
  }
}
