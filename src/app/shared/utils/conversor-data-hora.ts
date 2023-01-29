export class ConversorDataHora {
  definirData(data: Date): string {
    let dia: string;
    let mes: string;

    if(data.getDate() < 10) dia = `0${data.getDate()}`;
    else dia = `${data.getDate()}`;

    if((data.getMonth() + 1) < 10) mes = `0${(data.getMonth() + 1)}`;
    else mes = `${data.getMonth()}`;

    return `${dia}/${mes}/${data.getFullYear()}`;
  }

  definirHora(data: Date): string {
    let horas: string;
    let minutos: string;

    if(data.getHours() < 10) horas = `0${data.getHours()}`;
    else horas = `${data.getHours()}`;

    if(data.getMinutes() < 10) minutos = `0${data.getMinutes()}`;
    else minutos = `${data.getMinutes()}`;

    return `${horas}:${minutos}`
  }
}
