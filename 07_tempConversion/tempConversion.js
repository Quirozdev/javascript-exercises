const convertToCelsius = function(fahrenheitGrades) {
  return Math.round(((fahrenheitGrades - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(celciusGrades) {
  return Math.round(((celciusGrades * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
