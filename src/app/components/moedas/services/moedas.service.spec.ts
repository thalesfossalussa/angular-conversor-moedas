import { Conversao } from './../interfaces/Conversao';
import { MockedForTest } from './test/mocked-for-test';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MoedasService } from './moedas.service';

describe('MoedasService', () => {
  let service: MoedasService;
  let httpController: HttpTestingController;
  let mock = new MockedForTest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ MoedasService ]
    });
    service = TestBed.inject(MoedasService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => httpController.verify());
  it('should return listagemMoedas', done => {
    service.listarMoedas().subscribe(listagem => {
      expect(listagem.success).toBeTrue();
      done();
    });
    httpController.expectOne(mock.listagem.url).flush(mock.listagem.data);
  });

  afterEach(() => httpController.verify());
  it('should return result of convert', done => {
    service.converter("USD", "BRL").subscribe(conversao => {
      expect(conversao.success).toBeTrue();
      done();
    });
    httpController.expectOne(mock.conversao.url).flush(mock.conversao.data);
  });

  afterEach(() => httpController.verify());
  it('should return result of convert with amount', done => {
    service.converter("USD", "BRL", 500).subscribe(conversao => {
      expect(conversao.success).toBeTrue();
      done();
    });
    httpController.expectOne(mock.conversaoComQuantidade.url).flush(mock.conversaoComQuantidade.data);
  });

  afterEach(() => httpController.verify());
  it('should return valorHistorico', done => {
    let data = new Date("2022-01-05T13:00:00");
    service.valorHistorico("BRL", 10000, data).subscribe(valorHistorico => {
      expect(valorHistorico.success).toBeTrue();
      done();
    });
    httpController.expectOne(mock.valorHistorico.url).flush(mock.valorHistorico.data);
  });

  afterEach(() => httpController.verify());
  it('should return valorHistorico in months with two decimal places', done => {
    let data = new Date("2022-11-05T13:00:00");
    service.valorHistorico("BRL", 10000, data).subscribe(valorHistorico => {
      expect(valorHistorico.success).toBeTrue();
      done();
    });
    httpController.expectOne(mock.valorHistoricoWithTwoPlacesDate.url).flush(mock.valorHistoricoWithTwoPlacesDate.data);
  });

});
