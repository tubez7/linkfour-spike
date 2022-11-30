const getSubSquare = (matrix, xStartIndex, yStartIndex) => {
  // EARLY RETURNS
  if (!matrix) return "Please provide a matrix";

  if (xStartIndex === undefined) return "Please provide an xStartIndex";

  if (yStartIndex === undefined) return "Please provide a yStartIndex";

  if (xStartIndex + 3 > matrix[0].length || yStartIndex + 3 > matrix.length)
    return "Subsquare exceeds the bounds of the matrix";

  // DECLARE A VARIABLE TO BE RETURNED - ASSIGN AS AN ARRAY
  const subSquare = [];

  // ITERATE OVER THE MATRIX
  for (let yLimit = 0; yLimit < 3; yLimit++, yStartIndex++) {
    // ASSIGN AN ARRAY AS THE ELEMENT INSIDE THE SUBSQUARE TO BE RETURNED
    subSquare[yLimit] = [];
    for (let x = xStartIndex; x < xStartIndex + 3; x++) {
      // PUSH THE NUMBER AT THE STARTING INDEXES OF THE MATRIX TO THE NEW NESTED ARRAY AND INCREMENT THE INDEXES BY 1 ON EACH ITERATION
      subSquare[yLimit].push(matrix[yStartIndex][x]);
    }
  }

  // RETURN THE VARIABLE DECLARED AT START OF FUNCTION
  return subSquare;
};

module.exports = { getSubSquare };
