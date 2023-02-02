import { ValorHistorico } from './valor-historico';
import { Conversao } from './conversao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {

  private readonly API: string = 'https://api.exchangerate.host/';
  constructor(private http: HttpClient) { }

  listarMoedas(): Observable<any> {
    return this.http.get<any>(this.API + 'symbols');
  }

  converter(from: string, to: string, amount?: number): Observable<Conversao> {
    let converter = `convert?from=${from}&to=${to}&places=2`;
    if (amount) {
      converter += `&amount=${amount}`;
    }
    return this.http.get<Conversao>(this.API + converter);
  }

  valorHistorico(from: string, amount: number, dataRaw: Date): Observable<ValorHistorico> {
    let data = new Date(dataRaw);

    const anoString = `${data.getFullYear()}`;

    const mes = data.getMonth();
    let mesString: string;
    if ((mes + 1) < 10) mesString = '0' + mes;
    else mesString = `${mes}`;

    const dia = data.getDate();
    let diaString: string;
    if (dia < 10) diaString = `0${dia}`;
    else diaString = `${dia}`;

    const dataString = `${anoString}-${mesString}-${diaString}`;

    let historico = `${dataString}?base=${from}&amount=${amount}&places=2`;

    return this.http.get<ValorHistorico>(this.API + historico);
  }
}
