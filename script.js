// function celciousToFahrenheit(celcious) {
//   let fahrenheit = (9 * celcious) / 5 + 32;
//   return fahrenheit;
// }

// let celcious= parseFloat (document.getElementById("outFahrenheit").innerHTML;
function temperatureConverter(celcious) {
  celcious = parseFloat(celcious);
  document.getElementById("outFahrenheit").innerHTML = (9 * celcious) / 5 + 32;
}
