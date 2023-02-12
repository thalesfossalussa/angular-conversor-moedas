import { MOTD } from './motd';

export interface ConversaoRaw {
  motd: MOTD
  success: boolean,
  query: {
      from: string,
      to: string,
      amount: number
  },
  info: {
      rate: number
  },
  historical: boolean,
  date: Date,
  result: number
}
