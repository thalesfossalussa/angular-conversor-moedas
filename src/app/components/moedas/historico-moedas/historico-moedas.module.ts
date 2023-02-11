import { MatButtonModule } from '@angular/material/button';
import { MoedasServiceModule } from './../services/moedas.service.module';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';

import { HistoricoMoedasComponent } from './historico-moedas.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MoedasServiceModule
  ],
  exports: [HistoricoMoedasComponent],
  declarations: [HistoricoMoedasComponent],
  providers: [],
})
export class HistoricoMoedasModule { }
