AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timestampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timestampAtual = agora.getTime();
  const diferenca = timestampDoEvento - timestampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;
  const segundoEmMs = 1000;

  const dias = Math.floor(diferenca / diaEmMs);
  const horas = Math.floor((diferenca % diaEmMs) / horaEmMs);
  const minutos = Math.floor((diferenca % horaEmMs) / minutoEmMs);
  const segundos = Math.floor((diferenca % minutoEmMs) / segundoEmMs);

  //   document.getElementById("dias").innerText = dias;
  //   document.getElementById("horas").innerText = horas;
  //   document.getElementById("minutos").innerText = minutos;
  //   document.getElementById("segundos").innerText = segundos;

  document.getElementById(
    "contador"
  ).innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s.`;

  if (diferenca <= 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = "Evento expirado!";
  }
}, 1000);
