import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

import { MoedaConvertida } from './../conversao-moedas/moeda-convertida';

@Component({
  selector: 'app-historico-moedas',
  templateUrl: './historico-moedas.component.html',
  styleUrls: ['./historico-moedas.component.css']
})
export class HistoricoMoedasComponent implements OnInit, AfterViewInit {

  historico = new MatTableDataSource<MoedaConvertida>([]);
  tableColumns: string[] = ['data','hora','entrada','saida','taxa'];

  ngOnInit(): void {
    this.historico.data = JSON.parse(sessionStorage.getItem('conversoes') || '[]' );

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(): void {
    this.historico.paginator = this.paginator;
    this.historico.sort = this.sort;
  }

}
