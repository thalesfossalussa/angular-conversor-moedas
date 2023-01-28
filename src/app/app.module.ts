import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

import { ListagemMoedasComponent } from './components/moedas/listagem-moedas/listagem-moedas.component';
import { PesquisaMoedasComponent } from './components/moedas/pesquisa-moedas/pesquisa-moedas.component';
import { TabelaMoedasComponent } from './components/moedas/tabela-moedas/tabela-moedas.component';

import { FilterByDescriptionPipe } from './components/moedas/filter-by-description.pipe';
import { FilterByCodePipe } from './components/moedas/filter-by-code.pipe';
import { ConversaoMoedasComponent } from './components/moedas/conversao-moedas/conversao-moedas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ListagemMoedasComponent,
    PesquisaMoedasComponent,
    FilterByDescriptionPipe,
    FilterByCodePipe,
    TabelaMoedasComponent,
    ConversaoMoedasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
