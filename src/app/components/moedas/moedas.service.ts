import { AppComponent } from './../../app.component';
import { ListagemMoedas } from './listagem-moedas/listagem-moedas';
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

  // TODO: Tipar o retorno do Observable
  converter(from: string, to: string, quantidade?: number): Observable<any> {
    let converter = `convert?from=${from}&to=${to}&places=2`;
    if (quantidade) {
      converter += `&amount=${quantidade}`;
    }
    return this.http.get<ListagemMoedas>(this.API + converter);
  }
}
