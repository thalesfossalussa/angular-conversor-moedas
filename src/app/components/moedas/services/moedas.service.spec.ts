import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MoedasService } from './moedas.service';

const mockListagem = {
  url: "https://api.exchangerate.host/symbols",
  data: {
    motd: {
      msg: "If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.",
      url: "https://exchangerate.host/#/donate"
    },
    success: true,
    symbols: {
      AED: {
          description: "United Arab Emirates Dirham",
          code: "AED"
      },
      AFN: {
          description: "Afghan Afghani",
          code: "AFN"
      },
    }
  }
}

describe('MoedasService', () => {
  let service: MoedasService;
  let httpController: HttpTestingController;

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
    httpController.expectOne(mockListagem.url).flush(mockListagem.data);
  });

});
