const { checkDiagonalWinner } = require("./checkDiagonalWinner");
const { getSubSquare } = require("./getSubSquare");

const findLinkFourWinner = (board) => {
  const diagonalResult = checkDiagonalWinner(board);

  if (diagonalResult) {
    return diagonalResult;
  } else {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const regex = /[xo]/;

        if (regex.test(board[i][j])) {
          const player = board[i][j];
          const verticalResults = [];
          const horizontalResults = [];

          const vertSquare = getSubSquare(board, j, i + 1);

          if (typeof vertSquare !== "string") {
            verticalResults.push(
              vertSquare[0][0],
              vertSquare[1][0],
              vertSquare[2][0]
            );
          } else {
            verticalResults.push(null);
          }

          if (i < 3) {
            const horizontalSq = getSubSquare(board, j + 1, i);

            if (typeof horizontalSq !== "string") {
              horizontalResults.push(
                horizontalSq[0][0],
                horizontalSq[0][1],
                horizontalSq[0][2]
              );
            } else {
              horizontalResults.push(null);
            }
          } else {
            const horizontalSq = getSubSquare(board, j + 1, i - 2);

            if (typeof horizontalSq !== "string") {
              horizontalResults.push(
                horizontalSq[2][0],
                horizontalSq[2][1],
                horizontalSq[2][2]
              );
            } else {
              horizontalResults.push(null);
            }
          }

          if (
            verticalResults.every((elem) => elem === player) ||
            horizontalResults.every((elem) => elem === player)
          ) {
            return player;
          }
        }
      }
    }
    return false;
  }
};

module.exports = { findLinkFourWinner };
