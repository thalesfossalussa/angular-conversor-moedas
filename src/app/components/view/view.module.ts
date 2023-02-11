import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../../app-routing.module';
import { MoedasServiceModule } from './../moedas/services/moedas.service.module';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MoedasServiceModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    FooterComponent,
    MenuComponent,
    NotFoundComponent
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    MenuComponent,
    NotFoundComponent
  ]
})
export class ViewModule { }
