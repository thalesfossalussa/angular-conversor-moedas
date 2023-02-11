import { NgModule } from '@angular/core';

import { ListagemMoedasModule } from './listagem-moedas/listagem-moedas.module';
import { HistoricoMoedasModule } from './historico-moedas/historico-moedas.module';
import { ConversaoMoedasModule } from './conversao-moedas/conversao-moedas.module';

@NgModule({
  imports: [
    ConversaoMoedasModule,
    HistoricoMoedasModule,
    ListagemMoedasModule
  ]
})
export class MoedasModule { }
