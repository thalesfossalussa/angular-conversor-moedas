import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoricoMoedasComponent } from './components/moedas/historico-moedas/historico-moedas.component';
import { ConversaoMoedasComponent } from './components/moedas/conversao-moedas/conversao-moedas.component';
import { ListagemMoedasComponent } from './components/moedas/listagem-moedas/listagem-moedas.component';
import { HomeComponent } from './components/view/home/home.component';
import { NotFoundComponent } from './components/view/error/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'listagem-moedas',
    component: ListagemMoedasComponent
  },
  {
    path: 'converter-moedas',
    component: ConversaoMoedasComponent
  },
  {
    path: 'historico',
    component: HistoricoMoedasComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
