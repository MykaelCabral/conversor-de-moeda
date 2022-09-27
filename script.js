function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmRealConvertido = valorEmDolarNumerico * 5.26;
  console.log(valorEmRealConvertido);
  var elementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em R$ é " + valorEmRealConvertido;
  elementoConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);
  var valorEmRealConvertido = valorEmEuroNumerico * 5.1;
  console.log(valorEmRealConvertido);
  var elementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em R$ é " + valorEmRealConvertido;
  elementoConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valorElemento = document.getElementById("valorB");
  var valorB = valorElemento.value;
  var valorEmBitcoinNumerico = parseFloat(valorB);
  var valorEmRealConvertido = valorEmBitcoinNumerico * 100000.196;
  console.log(valorEmRealConvertido);
  var elementoConvertido = document.getElementById("valorBConvertido");
  var valorBConvertido = "O resultado em R$ é " + valorEmRealConvertido;
  elementoConvertido.innerHTML = valorBConvertido;
}