import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { MoedasService } from './../services/moedas.service';
import { Conversao } from '../interfaces/Conversao';

@Component({
  selector: 'app-historico-moedas',
  templateUrl: './historico-moedas.component.html',
  styleUrls: ['./historico-moedas.component.css']
})
export class HistoricoMoedasComponent implements OnInit, AfterViewInit {

  historico = new MatTableDataSource<Conversao>([]);
  tableColumns: string[] = ['data','hora','amount','result','rate'];

  constructor(private service: MoedasService) { }

  ngOnInit(): void {
    this.carregarDataSource();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(): void {
    this.historico.paginator = this.paginator;
    this.historico.sort = this.sort;
  }

  carregarDataSource() {
    this.historico.data = JSON.parse(sessionStorage.getItem('conversoes') || '[]' );

    for(let i = 0; i < this.historico.data.length; i++){

      this.service.valorHistorico(this.historico.data[i].from, this.historico.data[i].amount, this.historico.data[i].data).subscribe((valorHistorico) => {
        if (valorHistorico.rates.USD >= 10000) this.historico.data[i].valorSuperior = true;
        else this.historico.data[i].valorSuperior = false;
      })

    }
  }

  excluirHistorico(): void {
    sessionStorage.clear();
    this.carregarDataSource();
  }
}
