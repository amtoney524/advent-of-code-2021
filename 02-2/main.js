const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf8');
const directions = input.trim().split('\n');

let aim = 0;
let depth = 0;
let xPos = 0;

directions.forEach((e, i) => {
  const [command, units] = e.split(' ');

  if (command.includes('up')) {
    aim -= Number(units);
  } else if (command.includes('down')) {
    aim += Number(units);
  } else {
    xPos += Number(units);
    depth += (aim * Number(units));
  }
});

const result = String(depth * xPos);
const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, result);
