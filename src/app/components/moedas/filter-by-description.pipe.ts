import { Pipe, PipeTransform } from '@angular/core';
import { ListagemMoedas } from './listagem-moedas/listagem-moedas';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(listagem: ListagemMoedas[], buscar: string): ListagemMoedas[] {
    buscar = buscar.trim().toLowerCase();

    if (buscar) {
      return listagem.filter(moeda => moeda.description.toLowerCase().includes(buscar));
    } else {
      return listagem;
    }
  }

}
