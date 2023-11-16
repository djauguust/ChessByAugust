export const getPossibleMoviments = (scene, piece) => {
  let arrayAllowedPositions = [];
  if (piece.piece == "p") {
    //pawn: white
    if (piece.color == "w") {
      //normal moviment
      if (scene[piece.position[0] - 1][piece.position[1]][0] == "e") {
        arrayAllowedPositions = [
          ...arrayAllowedPositions,
          [
            parseInt(`${piece.position[0] - 1}`),
            parseInt(`${piece.position[1]}`),
          ],
        ];
        //2 box in first moviment
        if (
          scene[piece.position[0] - 2][piece.position[1]][0] == "e" &&
          piece.position[0] == 6
        ) {
          arrayAllowedPositions = [
            ...arrayAllowedPositions,
            [
              parseInt(`${piece.position[0] - 2}`),
              parseInt(`${piece.position[1]}`),
            ],
          ];
        }
      }
    }
    //pawn: black
    if (piece.color == "b") {
      //normal moviment
      if (scene[piece.position[0] + 1][piece.position[1]][0] == "e") {
        arrayAllowedPositions = [
          ...arrayAllowedPositions,
          [
            parseInt(`${piece.position[0] + 1}`),
            parseInt(`${piece.position[1]}`),
          ],
        ];
        //2 box in first moviment
        if (
          scene[piece.position[0] + 2][piece.position[1]][0] == "e" &&
          piece.position[0] == 1
        ) {
          arrayAllowedPositions = [
            ...arrayAllowedPositions,
            [
              parseInt(`${piece.position[0] + 2}`),
              parseInt(`${piece.position[1]}`),
            ],
          ];
        }
      }
    }
  }
  console.log(arrayAllowedPositions);
  return arrayAllowedPositions;
};
