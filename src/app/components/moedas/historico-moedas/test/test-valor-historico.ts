export class TestValorHistorico {
  public readonly dataOver10000 = {
    motd: {
      msg: "If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.",
      url: "https://exchangerate.host/#/donate"
    },
    success: true,
    historical: true,
    base: "USD",
    date: new Date("2023-02-16"),
    rates: {
      USD: 10001
    }
  };

  public readonly dataUnder10000 = {
    motd: {
      msg: "If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.",
      url: "https://exchangerate.host/#/donate"
    },
    success: true,
    historical: true,
    base: "EUR",
    date: new Date("2023-02-17"),
    rates: {
      USD: 9974.65
    }
  };
}

