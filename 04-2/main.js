const fs = require('fs');
const path = require('path');
const Board = require('./Board');

const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf8');
const lines = input.trim().split('\n').filter(line => line !== '');

const numbers = lines.shift().split(',');
let boards = []

// 1. create bingo boards from input
while (lines.length) {
  let rows = lines.splice(0, 5).map(line => line.split(' '));
  rows.forEach((row, i) => {
    rows[i] = row.filter(e => e !== '');
  });
  let board = new Board(rows);
  boards.push(board);
}

// 2. run through bingo game and find the last card to win
let lastWinner = null;

while (boards.length && numbers.length) {
  // call number
  let number = numbers.shift();

  // mark boards && check for winners
  for (let i = 0; i < boards.length; i++) {
    let board = boards[i];

    board.markSquare(number);
    
    if (board.isWinner()) {
      lastWinner = board.getScore(number);
      boards.splice(i, 1);
      i--;
    }
  }
}

let result = String(lastWinner);
let outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, result);