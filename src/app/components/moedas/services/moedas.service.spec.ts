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

const mockConversaoComQuantidade = {
  url: "https://api.exchangerate.host/convert?from=USD&to=BRL&places=2&amount=500",
  data: {
    motd: {
      msg: "If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.",
      url: "https://exchangerate.host/#/donate"
    },
    success: true,
    query: {
        from: "USD",
        to: "BRL",
        amount: 500
    },
    info: {
        rate: 5.214507
    },
    historical: false,
    date: "2023-02-17",
    result: 2607.253649
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

const mockValorHistoricoWithTwoPlacesDate = {
  url: "https://api.exchangerate.host/2022-11-05?base=BRL&amount=10000&places=2&symbols=USD",
  data: {
    motd: {
      msg: "If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.",
      url: "https://exchangerate.host/#/donate"
    },
    success: true,
    historical: true,
    base: "BRL",
    date: "2022-11-05",
    rates: {
      "USD": 1983.01
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
  it('should return result of convert', done => {
    service.converter("USD", "BRL").subscribe(conversao => {
      expect(conversao.success).toBeTrue();
      done();
    });
    httpController.expectOne(mockConversao.url).flush(mockConversao.data);
  });

  afterEach(() => httpController.verify());
  it('should return result of convert with amount', done => {
    service.converter("USD", "BRL", 500).subscribe(conversao => {
      expect(conversao.success).toBeTrue();
      done();
    });
    httpController.expectOne(mockConversaoComQuantidade.url).flush(mockConversaoComQuantidade.data);
  });

  afterEach(() => httpController.verify());
  it('should return valorHistorico', done => {
    let data = new Date("2022-01-05T13:00:00");
    service.valorHistorico("BRL", 10000, data).subscribe(valorHistorico => {
      expect(valorHistorico.success).toBeTrue();
      done();
    });
    httpController.expectOne(mockValorHistorico.url).flush(mockValorHistorico.data);
  });

  afterEach(() => httpController.verify());
  it('should return valorHistorico in months with two decimal places', done => {
    let data = new Date("2022-11-05T13:00:00");
    service.valorHistorico("BRL", 10000, data).subscribe(valorHistorico => {
      expect(valorHistorico.success).toBeTrue();
      done();
    });
    httpController.expectOne(mockValorHistoricoWithTwoPlacesDate.url).flush(mockValorHistoricoWithTwoPlacesDate.data);
  });

});
