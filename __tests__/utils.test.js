const { getSubSquare } = require("../utils/getSubSquare");
const { checkDiagonalWinner } = require("../utils/checkDiagonalWinner");
const { findLinkFourWinner } = require("../utils/findLinkFourWinner");

describe("getSubSquare()", () => {
  it('should return "Please provide a matrix" if none provided', () => {
    const input = getSubSquare();

    expect(input).toBe("Please provide a matrix");
  });

  it('should return "Please provide an xStartIndex" if none provided', () => {
    const matrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];

    const input = getSubSquare(matrix);

    expect(input).toBe("Please provide an xStartIndex");
  });

  it('should return "Please provide an yStartIndex" if none provided', () => {
    const matrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];

    const input = getSubSquare(matrix, 0);

    expect(input).toBe("Please provide a yStartIndex");
  });

  it("should return correct subsquare nested array when both indexes are 0", () => {
    const matrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];

    const input = getSubSquare(matrix, 0, 0);

    const output = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];

    expect(input).toEqual(output);
  });

  it("should return correct subsquare nested array when both indexes are not 0", () => {
    const matrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];

    const input = getSubSquare(matrix, 2, 5);

    const output = [
      [3, 9, 2],
      [1, 5, 3],
      [7, 4, 1],
    ];

    expect(input).toEqual(output);
  });

  it('should return "Subsquare exceeds the bounds of the matrix" if yStartIndex is too high', () => {
    const matrix = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];

    const input = getSubSquare(matrix, 1, 0);

    const output = "Subsquare exceeds the bounds of the matrix";

    expect(input).toBe(output);

    const matrix2 = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];

    const input2 = getSubSquare(matrix2, 7, 0);

    expect(input2).toBe(output);
  });

  it('should return "Subsquare exceeds the bounds of the matrix" if xStartIndex is too high', () => {
    const matrix = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];

    const input = getSubSquare(matrix, 0, 1);

    const output = "Subsquare exceeds the bounds of the matrix";

    expect(input).toBe(output);

    const matrix2 = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];

    const input2 = getSubSquare(matrix2, 0, 7);

    expect(input2).toBe(output);
  });

  it("should not mutate input multi-dimensional array", () => {
    const matrix = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];

    getSubSquare(matrix, 0, 0);

    expect(matrix).toEqual([
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ]);
  });

  test("further tests", () => {
    const matrix = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];

    const input = getSubSquare(matrix, 0, 0);

    const output = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];

    expect(input).toEqual(output);
  });
});

describe("checkDiagonalWinner()", () => {
  it("should return 'Please provide a 7 * 6 matrix' when no argument passed to function", () => {
    const input = checkDiagonalWinner();
    const output = "Please provide a 7 * 6 matrix";

    expect(input).toBe(output);
  });

  it("should return 'Please provide a 7 * 6 matrix' when board is wrong height", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    const output = "Please provide a 7 * 6 matrix";

    expect(checkDiagonalWinner(input)).toBe(output);
  });

  it("should return 'Please provide a 7 * 6 matrix' when board is wrong length", () => {
    const input = [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ];
    const output = "Please provide a 7 * 6 matrix";

    expect(checkDiagonalWinner(input)).toBe(output);
  });

  it("should return false when passed an empty board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    expect(checkDiagonalWinner(input)).toBe(false);
  });

  it("should return the winner when passed a winning diagonal board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "x", null, null, null],
      [null, null, "x", null, null, null, null],
      [null, "x", null, null, null, null, null],
      ["x", null, null, null, null, null, null],
    ];

    expect(checkDiagonalWinner(input)).toBe("x");
  });

  it("should return the winner when passed a winning o board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "o", null, null, null],
      [null, null, "o", null, null, null, null],
      [null, "o", null, null, null, null, null],
      ["o", null, null, null, null, null, null],
    ];

    expect(checkDiagonalWinner(input)).toBe("o");
  });

  it("should return the winner when passed a reverse winning x board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "x", null, null, null, null],
      [null, null, null, "x", null, null, null],
      [null, null, null, null, "x", null, null],
      [null, null, null, null, null, "x", null],
    ];

    expect(checkDiagonalWinner(input)).toBe("x");
  });

  it("should return the winner when passed a reverse winning o board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "o", null, null, null, null],
      [null, null, null, "o", null, null, null],
      [null, null, null, null, "o", null, null],
      [null, null, null, null, null, "o", null],
    ];

    expect(checkDiagonalWinner(input)).toBe("o");
  });

  test("more complex non-winning boards ", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ["x", "x", "x", "x", null, null, null],
    ];

    expect(checkDiagonalWinner(input)).toBe(false);
  });

  test("more complex non-winning boards ", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, "o", null, null, null, null, null],
      [null, "o", null, null, null, null, null],
      [null, "o", null, null, null, null, null],
      [null, "o", null, null, null, null, null],
    ];

    expect(checkDiagonalWinner(input)).toBe(false);
  });

  test("more complex non-valid boards ", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, "o", null, null, null, null],
      [null, "o", null, null, null, null, null],
      [null, "o", null, null, null, null, null],
      [null, "o", null, null, null, null, null],
    ];

    const output = "Please provide a 7 * 6 matrix";

    expect(checkDiagonalWinner(input)).toBe(output);
  });

  test("more complex non-winning boards ", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ["x", "o", "o", "o", "x", null, null],
      [null, "o", null, null, null, null, null],
      [null, "o", null, null, null, null, null],
      [null, "o", null, null, null, null, null],
    ];

    expect(checkDiagonalWinner(input)).toBe(false);
  });

  it("should return the winner when passed a complex winning o board", () => {
    const input = [
      ["x", null, null, "x", null, null, null],
      [null, "x", "x", null, null, null, null],
      [null, "x", "o", null, null, null, null],
      ["o", null, null, "o", null, null, null],
      [null, null, null, null, "o", null, null],
      [null, null, null, null, null, "o", null],
    ];

    expect(checkDiagonalWinner(input)).toBe("o");
  });
});

describe("findLinkFourWinner()", () => {
  it("should return 'Please provide a 7 * 6 matrix' when no argument passed to function", () => {
    const input = findLinkFourWinner();

    const output = "Please provide a 7 * 6 matrix";

    expect(input).toBe(output);
  });

  it("should return 'Please provide a 7 * 6 matrix' when board is wrong height", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    const output = "Please provide a 7 * 6 matrix";

    expect(findLinkFourWinner(input)).toBe(output);
  });

  it("should return 'Please provide a 7 * 6 matrix' when board is wrong length", () => {
    const input = [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ];
    const output = "Please provide a 7 * 6 matrix";

    expect(findLinkFourWinner(input)).toBe(output);
  });

  it("should return false when passed an empty board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    expect(findLinkFourWinner(input)).toBe(false);
  });

  it("should return the winner when passed a winning diagonal board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "x", null, null, null],
      [null, null, "x", null, null, null, null],
      [null, "x", null, null, null, null, null],
      ["x", null, null, null, null, null, null],
    ];

    expect(findLinkFourWinner(input)).toBe("x");
  });

  it("should return the winner when passed a winning vertical board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ["x", null, null, null, null, null, null],
      ["x", null, null, null, null, null, null],
      ["x", null, null, null, null, null, null],
      ["x", null, null, null, null, null, null],
    ];

    expect(findLinkFourWinner(input)).toBe("x");
  });

  it("should return the winner when passed a winning horizontal board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ["o", "o", "o", "o", null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    expect(findLinkFourWinner(input)).toBe("o");
  });

  it("should return the winner with more complex winning board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "o", null, null, null, null],
      [null, null, "o", null, null, null, null],
      [null, "x", "o", "x", null, null, null],
      [null, "x", "o", "x", null, null, null],
    ];

    expect(findLinkFourWinner(input)).toBe("o");
  });

  it("should return false with more complex non-winning board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "o", null, null, null, null],
      [null, null, "x", null, null, null, null],
      [null, "x", "o", "x", null, null, null],
      [null, "x", "o", "x", null, null, null],
    ];

    expect(findLinkFourWinner(input)).toBe(false);
  });

  it("should return the winner with more complex winning board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "x", null, null, null, null],
      [null, null, "x", "x", "x", null, null],
      [null, null, "o", "o", "o", "o", null],
    ];

    expect(findLinkFourWinner(input)).toBe("o");
  });

  it("should return the winner with more complex winning board", () => {
    const input = [
      ["o", "o", "o", "o", null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    expect(findLinkFourWinner(input)).toBe("o");
  });

  it("should return the winner with more complex winning board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "o", "o", "o", "o", null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    expect(findLinkFourWinner(input)).toBe("o");
  });

  it("should return the winner with more complex winning board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "x", null, null, null],
      [null, null, "x", "o", null, null, null],
      [null, "x", "o", "x", null, null, null],
      ["x", "x", "o", "o", null, null, "o"],
    ];

    expect(findLinkFourWinner(input)).toBe("x");
  });

  it("should return the winner with more complex winning board", () => {
    const input = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ["o", null, null, "o", null, null, null],
      ["o", "o", "x", "o", null, null, null],
      ["o", "x", "o", "x", null, null, "x"],
      ["x", "x", "o", "o", null, null, "o"],
    ];

    expect(findLinkFourWinner(input)).toBe("o");
  });
});
