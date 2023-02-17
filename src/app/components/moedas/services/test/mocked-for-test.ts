export class MockedForTest {
  public readonly listagem = {
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

  public readonly conversao = {
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

  public readonly conversaoComQuantidade = {
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

  public readonly valorHistorico = {
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

  public readonly valorHistoricoWithTwoPlacesDate = {
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
}
