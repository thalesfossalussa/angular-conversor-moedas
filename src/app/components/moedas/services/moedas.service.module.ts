import { HttpClientModule } from '@angular/common/http';
import { MoedasService } from './moedas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MoedasService
  ]
})
export class MoedasServiceModule { }
