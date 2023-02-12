import { MOTD } from './motd';

export interface ValorHistorico {
  motd: MOTD,
  success:    boolean;
  historical: boolean;
  base:       string;
  date:       Date;
  rates:      {
    USD: number
  };
}
