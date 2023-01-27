import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pesquisa-moedas',
  templateUrl: './pesquisa-moedas.component.html',
  styleUrls: ['./pesquisa-moedas.component.css']
})
export class PesquisaMoedasComponent implements OnInit, OnDestroy {

  filter: string = '';

  ngOnInit(){

  }

  ngOnDestroy(): void {
  }
}
