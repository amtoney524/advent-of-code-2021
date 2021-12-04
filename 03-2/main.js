const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf8');
const rates = input.trim().split('\n');

let col = 0;
let o2Rate = rates;
let co2Rate = rates;

while (col < rates[0].length) {

  if (o2Rate.length > 1) {
    let freq = 0;

    o2Rate.forEach((rate) => {
      rate.charAt(col) === '0' ? freq-- : freq++;
    });

    const matcher = freq >= 0 ? '1' : '0';
    o2Rate = o2Rate.filter(rate => rate[col] === matcher);
  }

  if (co2Rate.length > 1) {
    let freq = 0;

    co2Rate.forEach((rate) => {
      rate.charAt(col) === '0' ? freq -- : freq++;
    });

    const matcher = freq >= 0 ? '0' : '1';
    co2Rate = co2Rate.filter(rate => rate[col] === matcher);
  }

  col++;
}

const lifeSupportRating = parseInt(o2Rate, 2) * parseInt(co2Rate, 2);

const result = String(lifeSupportRating);
const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, result);