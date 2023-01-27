import { AppComponent } from './../../app.component';
import { ListagemMoedas } from './listagem-moedas/listagem-moedas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {

  private API: string = 'https://api.exchangerate.host/';
  constructor(private http: HttpClient) { }

  listarMoedas(): Observable<ListagemMoedas> {
    this.API = 'https://api.exchangerate.host/symbols';
    return this.http.get<ListagemMoedas>(this.API + 'symbols');
  }

  converter(from: string, to: string, quantidade?: number): Observable<any> {
    let converter = `${this.API}/convert?from=${from}&to=${to}`;
    if (quantidade) {
      converter += `&amount=${quantidade}`;
    }
    return this.http.get<ListagemMoedas>(this.API + converter);
  }
}
