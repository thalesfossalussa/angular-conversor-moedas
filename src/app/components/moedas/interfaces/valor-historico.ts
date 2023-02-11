export interface ValorHistorico {
  success:    boolean;
  historical: boolean;
  base:       string;
  date:       Date;
  rates:      {
    USD: number
  };
}
