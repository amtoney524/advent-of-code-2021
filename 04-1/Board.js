module.exports = class Board {
  constructor(rows) {
    this.squares = rows;
  }

  checkCols() {
    let board = this.squares;
    for (let col = 0; col < 5; col++) {
      let columns = [];
      for (let row = 0; row < 5; row++) {
        columns.push(board[row][col]);
      }
      if (columns.join('') === 'XXXXX') return true;
    }
    return false;
  }

  checkDiagonals() {
    let board = this.squares;
    let diagonal1 = [board[0][0], board[1][1], board[2][2], board[3][3], board[4][4]];
    let diagonal2 = [board[0][4], board[1][3], board[2][2], board[3][1], board[4][0]];
    return (diagonal1.join('') === 'XXXXX') || (diagonal2.join('') === 'XXXXX');
  }

  checkRows() {
    let board = this.squares;
    for (let row = 0; row < 5; row++) {
      if (board[row].join('') === 'XXXXX') return true;
    }
    return false;
  }

  getScore(winningNumber) {
    let board = this.squares;
    let sum = 0;
  
    board.forEach(row => {
      row.forEach(number => {
        if (number !== 'X') sum += Number(number);
      });
    });
  
    return sum * winningNumber;
  }

  isWinner() {
    return this.checkRows() || this.checkCols() || this.checkDiagonals();
  }

  markSquare(calledNum) {
    this.squares.forEach((row, i) => {
      row.forEach((number, i) => {
        if (number === calledNum) row[i] = 'X';
      });
    });
  }

  printSquares() {
    console.log(this.squares)
  }
}