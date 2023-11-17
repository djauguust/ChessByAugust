export const getPossibleMoviments = (scene, piece) => {
  let arrayAllowedPositions = [];
  let top = false;
  let bottom = false;
  let start = false;
  let end = false;

  if (piece.position[0] == 0) {
    top = true;
  }
  if (piece.position[0] == 7) {
    bottom = true;
  }
  if (piece.position[0] == 0) {
    start = true;
  }
  if (piece.position[0] == 7) {
    end = true;
  }

  if (piece.piece == "p") {
    //pawn: white
    if (piece.color == "w") {
      //normal moviment
      if (
        piece.position[0] != 0 &&
        scene[piece.position[0] - 1][piece.position[1]][0] == "e"
      ) {
        arrayAllowedPositions = [
          ...arrayAllowedPositions,
          [
            parseInt(`${piece.position[0] - 1}`),
            parseInt(`${piece.position[1]}`),
          ],
        ];
        //2 box in first moviment
        if (
          piece.position[0] == 6 &&
          scene[piece.position[0] - 2][piece.position[1]][0] == "e"
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
      //eat right
      if (
        piece.position[1] != 7 &&
        piece.position[0] != 0 &&
        scene[piece.position[0] - 1][piece.position[1] + 1][0] == "b"
      ) {
        arrayAllowedPositions = [
          ...arrayAllowedPositions,
          [
            parseInt(`${piece.position[0] - 1}`),
            parseInt(`${piece.position[1] + 1}`),
          ],
        ];
      }
      //eat left
      if (
        piece.position[0] != 0 &&
        piece.position[1] != 0 &&
        scene[piece.position[0] - 1][piece.position[1] - 1][0] == "b"
      ) {
        arrayAllowedPositions = [
          ...arrayAllowedPositions,
          [
            parseInt(`${piece.position[0] - 1}`),
            parseInt(`${piece.position[1] - 1}`),
          ],
        ];
      }
    }
    //pawn: black
    if (piece.color == "b") {
      //normal moviment
      if (
        piece.position[0] != 7 &&
        scene[piece.position[0] + 1][piece.position[1]][0] == "e"
      ) {
        arrayAllowedPositions = [
          ...arrayAllowedPositions,
          [
            parseInt(`${piece.position[0] + 1}`),
            parseInt(`${piece.position[1]}`),
          ],
        ];
        //2 box in first moviment
        if (
          piece.position[0] == 1 &&
          scene[piece.position[0] + 2][piece.position[1]][0] == "e"
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
      //eat right
      if (
        piece.position[0] != 7 &&
        piece.position[1] != 7 &&
        scene[piece.position[0] + 1][piece.position[1] + 1][0] == "w"
      ) {
        arrayAllowedPositions = [
          ...arrayAllowedPositions,
          [
            parseInt(`${piece.position[0] + 1}`),
            parseInt(`${piece.position[1] + 1}`),
          ],
        ];
      }
      //eat left
      if (
        piece.position[0] != 7 &&
        piece.position[1] != 0 &&
        scene[piece.position[0] + 1][piece.position[1] - 1][0] == "w"
      ) {
        arrayAllowedPositions = [
          ...arrayAllowedPositions,
          [
            parseInt(`${piece.position[0] + 1}`),
            parseInt(`${piece.position[1] - 1}`),
          ],
        ];
      }
    }
  }
  // king
  if (piece.piece == "K") {
    let array = [
      [piece.position[0] - 1, piece.position[1] - 1],
      [piece.position[0] - 1, piece.position[1]],
      [piece.position[0] - 1, piece.position[1] + 1],
      [piece.position[0], piece.position[1] - 1],
      [piece.position[0], piece.position[1] + 1],
      [piece.position[0] + 1, piece.position[1] - 1],
      [piece.position[0] + 1, piece.position[1]],
      [piece.position[0] + 1, piece.position[1] + 1],
    ];
    arrayAllowedPositions = array.filter(
      (e) =>
        e[0] > -1 &&
        e[1] > -1 &&
        e[0] < 8 &&
        e[1] < 8 &&
        scene[e[0]][e[1]][0] != piece.color
    );
  }
  console.log(arrayAllowedPositions);
  return arrayAllowedPositions;
};
