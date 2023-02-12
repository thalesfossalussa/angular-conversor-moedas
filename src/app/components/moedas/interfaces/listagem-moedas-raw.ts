import { MOTD } from './motd';
import { ListagemMoedas } from './listagem-moedas';

export interface ListagemMoedasRaw {
  motd: MOTD
  success: boolean;
  symbols: { [key: string]: ListagemMoedas };
}

