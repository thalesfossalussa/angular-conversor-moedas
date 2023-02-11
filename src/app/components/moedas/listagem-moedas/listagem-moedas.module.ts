import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoedasServiceModule } from './../services/moedas.service.module';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';

import { ListagemMoedasComponent } from './listagem-moedas.component';

@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MoedasServiceModule,
    BrowserAnimationsModule
  ],
  exports: [ListagemMoedasComponent],
  declarations: [ListagemMoedasComponent],
  providers: [],
})
export class ListagemMoedasModule { }
