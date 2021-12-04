const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf8');

const nums = input.trim().split('\n').map(e => Number(e));
const windows = [];

for (let i = 0; i < nums.length - 2; i++) {
  const sum = nums.slice(i, i + 3).reduce((p, c, i) => p + c);
  console.log(`${nums.slice(i, i + 3)} => ${sum}`)
  windows.push(sum);
}

let numIncreases = 0;
for (let i = 1; i < windows.length; i++) {
  if (windows[i] > windows[i - 1]) numIncreases++;
}

const result = String(numIncreases);
const outputPath = path.join(__dirname, "output.txt");
fs.writeFileSync(outputPath, result);