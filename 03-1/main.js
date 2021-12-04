const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf8');
const rates = input.trim().split('\n');

let col = 0;
let gammaRate = '';
let epsilonRate = '';

while (col < rates[0].length) {

  let freq = 0;

  rates.forEach((rate) => {
    rate.charAt(col) === '0' ? freq-- : freq++;
  });

  if (freq <= 0) {
    gammaRate += '0';
    epsilonRate += '1';
  } else {
    gammaRate += '1';
    epsilonRate += '0';
  }

  col++;
}

const powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
 
const result = String(powerConsumption);
const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, result);