const { getSubSquare } = require("./getSubSquare");

const checkDiagonalWinner = (board) => {
  if (!board || board.length !== 6) return "Please provide a 7 * 6 matrix";

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const regex = /[xo]/;

      if (board[i].length !== 7) return "Please provide a 7 * 6 matrix";

      if (regex.test(board[i][j])) {
        const player = board[i][j];
        const diagLeft = [];
        const diagRight = [];

        const leftSq = getSubSquare(board, j - 3, i + 1);

        if (typeof leftSq !== "string") {
          diagLeft.push(leftSq[0][2], leftSq[1][1], leftSq[2][0]);
        } else {
          diagLeft.push(null);
        }

        const rightSq = getSubSquare(board, j + 1, i + 1);

        if (typeof rightSq !== "string") {
          diagRight.push(rightSq[0][0], rightSq[1][1], rightSq[2][2]);
        } else {
          diagRight.push(null);
        }

        if (
          diagLeft.every((elem) => elem === player) ||
          diagRight.every((elem) => elem === player)
        ) {
          return player;
        }
      }
    }
  }

  return false;
};

module.exports = { checkDiagonalWinner };
