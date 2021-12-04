const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf8');
const directions = input.trim().split('\n');

let depth = 0;
let xPos = 0;

directions.forEach((e, i) => {
  const [command, units] = e.split(' ');

  if (command.includes('up')) {
    depth -= Number(units);
  } else if (command.includes('down')) {
    depth += Number(units);
  } else {
    xPos += Number(units);
  }
});

const result = String(depth * xPos);
const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, result);
