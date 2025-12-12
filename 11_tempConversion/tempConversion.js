const convertToCelsius = function(fahrenheit) {
  calc = (fahrenheit - 32) * 5 / 9;
  return Number(calc.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  calc = celcius * 9 / 5 + 32;
  return Number(calc.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
