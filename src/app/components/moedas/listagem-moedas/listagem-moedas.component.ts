import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subject } from 'rxjs/internal/Subject';


import { MoedasService } from './../moedas.service';
import { ListagemMoedas } from './listagem-moedas';
@Component({
  selector: 'app-listagem-moedas',
  templateUrl: './listagem-moedas.component.html',
  styleUrls: ['./listagem-moedas.component.css']
})
export class ListagemMoedasComponent implements OnInit, AfterViewInit,OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';
  debounce: Subject<string> = new Subject<string>();

  listagem = new MatTableDataSource<ListagemMoedas>([]);
  tableColumns: string[] = ['code', 'description'];
  buscar: string = '';

  constructor(private service: MoedasService) { }

  ngOnInit(): void {
    this.service.listarMoedas().subscribe((resultado) => {
      this.listagem.data = Object.values(resultado.symbols);
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(): void {
    this.listagem.paginator = this.paginator;
    this.listagem.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listagem.filter = filterValue.trim().toLowerCase();
  }
}
