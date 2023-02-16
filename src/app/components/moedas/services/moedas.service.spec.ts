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

const mockConversao = {
  url: "https://api.exchangerate.host/convert?from=USD&to=BRL&places=2",
  data: {
    motd: {
      msg: "If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.",
      url: "https://exchangerate.host/#/donate"
    },
    success: true,
    query: {
      from: "USD",
      to: "BRL",
      amount: 1
    },
    info: {
      rate: 5.214344
    },
    historical: false,
    date: "2023-02-16",
    result: 5.214344
  }
}

const mockValorHistorico = {
  url: "https://api.exchangerate.host/2022-01-05?base=BRL&amount=10000&places=2&symbols=USD",
  data: {
    motd: {
      msg: "If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.",
      url: "https://exchangerate.host/#/donate"
    },
    success: true,
    historical: true,
    base: "BRL",
    date: "2022-01-05",
    rates: {
      "USD": 1751.6
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

  afterEach(() => httpController.verify());
  it('should convert USD to BRL', done => {
    service.converter("USD", "BRL").subscribe(conversao => {
      expect(conversao.success).toBeTrue();
      done();
    });
    httpController.expectOne(mockConversao.url).flush(mockConversao.data);
  });

  afterEach(() => httpController.verify());
  it('should return valorHistorico of 10000 BRL in USD', done => {
    let data = new Date("2022-01-05T13:00:00");
    service.valorHistorico("BRL", 10000, data).subscribe(valorHistorico => {
      expect(valorHistorico.success).toBeTrue();
      done();
    });
    httpController.expectOne(mockValorHistorico.url).flush(mockValorHistorico.data);
  });

});
