const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf8');

const nums = input.trim().split('\n').map(e => Number(e));

let numIncreases = 0;
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > nums[i - 1]) numIncreases++;
}

const result = String(numIncreases);
const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, result);
