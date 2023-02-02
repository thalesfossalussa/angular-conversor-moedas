export interface MoedaConvertida {
  from: string,
  to: string,
  amount: number,
  rate: number | null,
  data: Date,
  result: number | null,
  valorSuperior?: boolean | null
}
