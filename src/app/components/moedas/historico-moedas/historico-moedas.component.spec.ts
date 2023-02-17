import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestValorHistorico } from './test/test-valor-historico';
import { MoedasService } from './../services/moedas.service';
import { HistoricoMoedasModule } from './historico-moedas.module';
import { HistoricoMoedasComponent } from './historico-moedas.component';

describe('HistoricoMoedasComponent', () => {
  let component: HistoricoMoedasComponent;
  let fixture: ComponentFixture<HistoricoMoedasComponent>;
  let service: MoedasService;
  let testValorHistorico = new TestValorHistorico;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoMoedasComponent ],
      imports: [
        HistoricoMoedasModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [ MoedasService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoMoedasComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MoedasService)
    fixture.detectChanges();
    window.sessionStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data source historico', () => {
    window.sessionStorage.setItem('conversoes', '[{"from":"BRL","to":"USD","amount":15000,"rate":0.19,"data":"2023-02-16T21:37:37.907Z","result":2876.68,"valorSuperior":null},{"from":"BRL","to":"USD","amount":55000,"rate":0.19,"data":"2023-02-16T21:37:46.289Z","result":10547.83,"valorSuperior":null},{"from":"USD","to":"EUR","amount":15000,"rate":0.93,"data":"2023-02-16T21:37:52.771Z","result":14001.33,"valorSuperior":null},{"from":"EUR","to":"BRL","amount":10,"rate":5.59,"data":"2023-02-16T21:38:03.356Z","result":55.89,"valorSuperior":null},{"from":"BTC","to":"CDF","amount":500000,"rate":51272249.01,"data":"2023-02-16T21:38:13.828Z","result":25636124505292.23,"valorSuperior":null}]');
    component.carregarDataSource();
    expect(component.historico.data[0].from).toBe('BRL');
  });

  it('should delete session storage', () => {
    window.sessionStorage.setItem('conversoes', '[{"from":"BRL","to":"USD","amount":15000,"rate":0.19,"data":"2023-02-16T21:37:37.907Z","result":2876.68,"valorSuperior":null},{"from":"BRL","to":"USD","amount":55000,"rate":0.19,"data":"2023-02-16T21:37:46.289Z","result":10547.83,"valorSuperior":null},{"from":"USD","to":"EUR","amount":15000,"rate":0.93,"data":"2023-02-16T21:37:52.771Z","result":14001.33,"valorSuperior":null},{"from":"EUR","to":"BRL","amount":10,"rate":5.59,"data":"2023-02-16T21:38:03.356Z","result":55.89,"valorSuperior":null},{"from":"BTC","to":"CDF","amount":500000,"rate":51272249.01,"data":"2023-02-16T21:38:13.828Z","result":25636124505292.23,"valorSuperior":null}]');
    component.carregarDataSource();

    component.excluirHistorico();
    expect(component.historico.data).toEqual([]);
  });

  it('should return true in valorSuperior when value in dollar is over than 10000', waitForAsync(() => {
    window.sessionStorage.setItem('conversoes','[{"from":"USD","to":"BRL","amount":10001,"rate":5.21,"data":"2023-02-17T03:06:06.285Z","result":52150.28,"valorSuperior":null}]')
    component.historico.data = JSON.parse(window.sessionStorage.getItem('conversoes') || '[]');

    spyOn(service, 'valorHistorico').and.returnValue(of(testValorHistorico.dataOver10000));
    component.verificarValorHistorico();
    expect(component.historico.data[0].valorSuperior).toBeTrue();

  }));

  it('should return false in valorSuperior when value in dollar is under than 10000', waitForAsync(() => {
    window.sessionStorage.setItem('conversoes','[{"from":"EUR","to":"USD","amount":9370,"rate":1.07,"data":"2023-02-17T03:06:32.495Z","result":9991.55,"valorSuperior":null}]')
    component.historico.data = JSON.parse(window.sessionStorage.getItem('conversoes') || '[]');

    spyOn(service, 'valorHistorico').and.returnValue(of(testValorHistorico.dataUnder10000));
    component.verificarValorHistorico();
    expect(component.historico.data[0].valorSuperior).toBeFalse();

  }));

});
