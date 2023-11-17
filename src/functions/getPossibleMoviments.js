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
  if (piece.position[1] == 0) {
    start = true;
  }
  if (piece.position[1] == 7) {
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
  // kings
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
  //tower and queen
  if (piece.piece == "T" || piece.piece == "Q") {
    if (!top) {
      let b = true;
      for (let i = 1; i <= piece.position[0] && b; i++) {
        if (scene[piece.position[0] - i][piece.position[1]][0] == "e") {
          arrayAllowedPositions = [
            ...arrayAllowedPositions,
            [
              parseInt(`${piece.position[0] - i}`),
              parseInt(`${piece.position[1]}`),
            ],
          ];
        } else {
          if (
            scene[piece.position[0] - i][piece.position[1]][0] != piece.color
          ) {
            arrayAllowedPositions = [
              ...arrayAllowedPositions,
              [
                parseInt(`${piece.position[0] - i}`),
                parseInt(`${piece.position[1]}`),
              ],
            ];
          }
          b = false;
        }
      }
    }
    if (!bottom) {
      let b = true;
      for (let i = 1; i < 8 - piece.position[0] && b; i++) {
        if (scene[piece.position[0] + i][piece.position[1]][0] == "e") {
          arrayAllowedPositions = [
            ...arrayAllowedPositions,
            [
              parseInt(`${piece.position[0] + i}`),
              parseInt(`${piece.position[1]}`),
            ],
          ];
        } else {
          if (
            scene[piece.position[0] + i][piece.position[1]][0] != piece.color
          ) {
            arrayAllowedPositions = [
              ...arrayAllowedPositions,
              [
                parseInt(`${piece.position[0] + i}`),
                parseInt(`${piece.position[1]}`),
              ],
            ];
          }
          b = false;
        }
      }
    }
    if (!start) {
      let b = true;
      for (let i = 1; i <= piece.position[1] && b; i++) {
        if (scene[piece.position[0]][piece.position[1] - i][0] == "e") {
          arrayAllowedPositions = [
            ...arrayAllowedPositions,
            [
              parseInt(`${piece.position[0]}`),
              parseInt(`${piece.position[1] - i}`),
            ],
          ];
        } else {
          if (
            scene[piece.position[0]][piece.position[1] - i][0] != piece.color
          ) {
            arrayAllowedPositions = [
              ...arrayAllowedPositions,
              [
                parseInt(`${piece.position[0]}`),
                parseInt(`${piece.position[1] - i}`),
              ],
            ];
          }
          b = false;
        }
      }
    }
    if (!end) {
      let b = true;
      for (let i = 1; i < 8 - piece.position[1] && b; i++) {
        if (scene[piece.position[0]][piece.position[1] + i][0] == "e") {
          arrayAllowedPositions = [
            ...arrayAllowedPositions,
            [
              parseInt(`${piece.position[0]}`),
              parseInt(`${piece.position[1] + i}`),
            ],
          ];
        } else {
          if (
            scene[piece.position[0]][piece.position[1] + i][0] != piece.color
          ) {
            arrayAllowedPositions = [
              ...arrayAllowedPositions,
              [
                parseInt(`${piece.position[0]}`),
                parseInt(`${piece.position[1] + i}`),
              ],
            ];
          }
          b = false;
        }
      }
    }
  }
  //bishop and queen
  if (piece.piece == "B" || piece.piece == "Q") {
    if (!top || !start) {
      let b = true;
      for (
        let i = 1;
        i <= piece.position[0] && i <= piece.position[1] && b;
        i++
      ) {
        if (scene[piece.position[0] - i][piece.position[1] - i][0] == "e") {
          arrayAllowedPositions = [
            ...arrayAllowedPositions,
            [
              parseInt(`${piece.position[0] - i}`),
              parseInt(`${piece.position[1] - i}`),
            ],
          ];
        } else {
          if (
            scene[piece.position[0] - i][piece.position[1] - i][0] !=
            piece.color
          ) {
            arrayAllowedPositions = [
              ...arrayAllowedPositions,
              [
                parseInt(`${piece.position[0] - i}`),
                parseInt(`${piece.position[1] - i}`),
              ],
            ];
          }
          b = false;
        }
      }
    }
    if (!end || !bottom) {
      let b = true;
      for (
        let i = 1;
        i < 8 - piece.position[0] && i < 8 - piece.position[1] && b;
        i++
      ) {
        if (scene[piece.position[0] + i][piece.position[1] + i][0] == "e") {
          arrayAllowedPositions = [
            ...arrayAllowedPositions,
            [
              parseInt(`${piece.position[0] + i}`),
              parseInt(`${piece.position[1] + i}`),
            ],
          ];
        } else {
          if (
            scene[piece.position[0] + i][piece.position[1] + i][0] !=
            piece.color
          ) {
            arrayAllowedPositions = [
              ...arrayAllowedPositions,
              [
                parseInt(`${piece.position[0] + i}`),
                parseInt(`${piece.position[1] + i}`),
              ],
            ];
          }
          b = false;
        }
      }
    }
    if (!top || !end) {
      let b = true;
      for (
        let i = 1;
        i <= piece.position[0] && i < 8 - piece.position[1] && b;
        i++
      ) {
        if (scene[piece.position[0] - i][piece.position[1] + i][0] == "e") {
          arrayAllowedPositions = [
            ...arrayAllowedPositions,
            [
              parseInt(`${piece.position[0] - i}`),
              parseInt(`${piece.position[1] + i}`),
            ],
          ];
        } else {
          if (
            scene[piece.position[0] - i][piece.position[1] + i][0] !=
            piece.color
          ) {
            arrayAllowedPositions = [
              ...arrayAllowedPositions,
              [
                parseInt(`${piece.position[0] - i}`),
                parseInt(`${piece.position[1] + i}`),
              ],
            ];
          }
          b = false;
        }
      }
    }
    if (!bottom || !start) {
      let b = true;
      for (
        let i = 1;
        i <= piece.position[1] && i < 8 - piece.position[0] && b;
        i++
      ) {
        if (scene[piece.position[0] + i][piece.position[1] - i][0] == "e") {
          arrayAllowedPositions = [
            ...arrayAllowedPositions,
            [
              parseInt(`${piece.position[0] + i}`),
              parseInt(`${piece.position[1] - i}`),
            ],
          ];
        } else {
          if (
            scene[piece.position[0] + i][piece.position[1] - i][0] !=
            piece.color
          ) {
            arrayAllowedPositions = [
              ...arrayAllowedPositions,
              [
                parseInt(`${piece.position[0] + i}`),
                parseInt(`${piece.position[1] - i}`),
              ],
            ];
          }
          b = false;
        }
      }
    }
  }
  console.log(arrayAllowedPositions);
  return arrayAllowedPositions;
};
