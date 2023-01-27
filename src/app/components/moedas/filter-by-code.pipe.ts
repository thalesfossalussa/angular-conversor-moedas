import { Pipe, PipeTransform } from '@angular/core';
import { ListagemMoedas } from './listagem-moedas/listagem-moedas';

@Pipe({
  name: 'filterByCode'
})
export class FilterByCodePipe implements PipeTransform {

  transform(listagem: ListagemMoedas[], buscar: string): ListagemMoedas[] {
    buscar = buscar.trim().toLowerCase();

    if (buscar) {
      return listagem.filter(moeda => moeda.code.toLowerCase().includes(buscar));
    } else {
      return listagem;
    }
  }

}
