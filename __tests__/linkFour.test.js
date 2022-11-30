const { LinkFour } = require("../linkFour.js");

describe("ConnectFourGame()", () => {
  describe("game methods called on a new instance of game", () => {
    test("getBoard method returns an empty board when new game initialised ", () => {
      const testGame = new LinkFour();
      const input = testGame.getBoard();
      const output = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ];

      expect(input).toEqual(output);
    });

    test("getPlayer method returns 'x' when new game initialised", () => {
      const testGame = new LinkFour();
      const input = testGame.getPlayer();

      expect(input).toBe("It is Player 1's (x) turn");
    });

    test("calling play() method will drop an 'x' to the bottom of the numbered counter", () => {
      const testGame = new LinkFour();

      testGame.play(0);

      const output = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["x", null, null, null, null, null, null],
      ];

      expect(testGame.board).toEqual(output);
    });

    test("after calling play() method, game player will now be false", () => {
      const testGame = new LinkFour();

      testGame.play(0);

      expect(testGame.player).toBe(false);
    });

    test("calling play() method twice on same column will drop an 'o' on top of an 'x'", () => {
      const testGame = new LinkFour();

      testGame.play(0);
      testGame.play(0);

      const output = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["o", null, null, null, null, null, null],
        ["x", null, null, null, null, null, null],
      ];

      expect(testGame.board).toEqual(output);
    });

    test("calling play() method full column will return 'This column is full'", () => {
      const testGame = new LinkFour();

      testGame.play(0);
      testGame.play(0);
      testGame.play(0);
      testGame.play(0);
      testGame.play(0);
      testGame.play(0);

      const input = testGame.play(0);

      const output = "This column is full";

      expect(input).toBe(output);
    });

    test("if play() method returns 'This column is full', player should not change", () => {
      const testGame = new LinkFour();

      testGame.play(0);
      testGame.play(0);
      testGame.play(0);
      testGame.play(0);
      testGame.play(0);
      testGame.play(0);
      testGame.play(0);

      const input = testGame.getPlayer();

      expect(input).toBe("It is Player 1's (x) turn");
    });

    test("if play() method returns 'This column is full', getBoard method shows full board", () => {
      const testGame = new LinkFour();

      testGame.play(1);
      testGame.play(1);
      testGame.play(1);
      testGame.play(1);
      testGame.play(1);
      testGame.play(1);
      testGame.play(1);

      const input = testGame.getBoard();
      const output = [
        [null, "o", null, null, null, null, null],
        [null, "x", null, null, null, null, null],
        [null, "o", null, null, null, null, null],
        [null, "x", null, null, null, null, null],
        [null, "o", null, null, null, null, null],
        [null, "x", null, null, null, null, null],
      ];

      expect(input).toEqual(output);
    });
  });
  describe("checking winning boards with imported helper function", () => {
    test("checkWinner returns winner when called on a winning board state", () => {
      const testGame = new LinkFour();

      testGame.play(1);
      testGame.play(2);
      testGame.play(1);
      testGame.play(2);
      testGame.play(1);
      testGame.play(2);
      testGame.play(1);

      const input = testGame.checkWinner();

      expect(input).toBe("x");
    });
  });

  describe("Assorted misc tests", () => {
    test("methods should return correct states after 1 play", () => {
      const testGame = new LinkFour();

      testGame.play(3);

      const input = testGame.getBoard();
      const input2 = testGame.getPlayer();
      const output = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, "x", null, null, null],
      ];

      expect(input).toEqual(output);
      expect(input2).toBe("It is Player 2's (o) turn");
    });

    test("methods should return correct states after 1 play", () => {
      const testGame = new LinkFour();

      testGame.play(3);
      testGame.play(2);
      testGame.play(3);
      testGame.play(1);
      testGame.play(3);
      testGame.play(0);
      testGame.play(3);

      const input = testGame.getBoard();
      const input2 = testGame.checkWinner();
      const output = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, "x", null, null, null],
        [null, null, null, "x", null, null, null],
        [null, null, null, "x", null, null, null],
        ["o", "o", "o", "x", null, null, null],
      ];

      expect(input).toEqual(output);
      expect(input2).toBe("x");
    });
  });
});

describe("Personally modified game", () => {
  describe("Altered properties of personal game", () => {
    test("game instance has player1 and player2 properties set by constructor arguments", () => {
      const testGame = new LinkFour("Richard", "Bella");

      expect(testGame.player1).toBe("Richard");
      expect(testGame.player2).toBe("Bella");
    });

    test("player1 and player2 values will default if not passed to new game constructor", () => {
      const testGame = new LinkFour();

      expect(testGame.player1).toBe("Player 1");
      expect(testGame.player2).toBe("Player 2");
    });

    test("play method will return the name of the winner if a move results in a winning board", () => {
      const testGame = new LinkFour("Richard");

      testGame.play(1);
      testGame.play(2);
      testGame.play(1);
      testGame.play(2);
      testGame.play(1);
      testGame.play(2);

      const input = testGame.play(1);

      expect(input).toBe("Richard (x) wins!");
    });

    test("play method will return the name of the winner if a move results in a winning board", () => {
      const testGame = new LinkFour();

      testGame.play(4);
      testGame.play(3);
      testGame.play(3);
      testGame.play(2);
      testGame.play(3);
      testGame.play(1);
      testGame.play(3);

      const input = testGame.play(0);

      expect(input).toBe("Player 2 (o) wins!");

      const input2 = testGame.getBoard();

      const output = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, "x", null, null, null],
        [null, null, null, "x", null, null, null],
        [null, null, null, "x", null, null, null],
        ["o", "o", "o", "o", "x", null, null],
      ];

      expect(input2).toEqual(output);
    });

    test("play method will return 'OUT OF RANGE - Please choose a number between 0 and 6' if number passed to it is not in range", () => {
      const testGame = new LinkFour();

      const input = testGame.play(7);
      const input2 = testGame.play(-1);
      const output = "OUT OF RANGE - Please choose a number between 0 and 6";

      expect(input).toBe(output);
      expect(input2).toBe(output);
    });

    test("getPlayer method will return more details when called", () => {
      const testGame = new LinkFour();

      const input = testGame.getPlayer();

      expect(input).toBe("It is Player 1's (x) turn");
    });

    test("getPlayer method will return more details when called", () => {
      const testGame = new LinkFour("Richard", "William");

      const input = testGame.getPlayer();

      expect(input).toBe("It is Richard's (x) turn");

      testGame.play(0);

      const input2 = testGame.getPlayer();

      expect(input2).toBe("It is William's (o) turn");
    });

    test("Attempting to play after a winner has been declared will prevent further playing and will return details of the winner", () => {
      const testGame = new LinkFour();

      testGame.play(4);
      testGame.play(3);
      testGame.play(3);
      testGame.play(2);
      testGame.play(3);
      testGame.play(1);
      testGame.play(3);
      testGame.play(0);

      const input = testGame.play(0);
      const output = "GAME OVER - Player 2 won. Please start a new game";

      expect(input).toBe(output);
    });
  });
});
