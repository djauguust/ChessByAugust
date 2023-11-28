import { allowedForEnPassant } from "./allowedForEnPassant";
import { boxIsAttacked } from "./boxIsAttacked";

export const getPossibleMoviments = (
  scene,
  piece,
  historyCastling,
  onlyControl = true,
  historyEnPassant
) => {
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
        (scene[piece.position[0] - 1][piece.position[1] + 1][0] == "b" ||
          allowedForEnPassant(piece, historyEnPassant)[1])
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
        (scene[piece.position[0] - 1][piece.position[1] - 1][0] == "b" ||
          allowedForEnPassant(piece, historyEnPassant)[0])
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
        (scene[piece.position[0] + 1][piece.position[1] + 1][0] == "w" ||
          allowedForEnPassant(piece, historyEnPassant)[1])
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
        (scene[piece.position[0] + 1][piece.position[1] - 1][0] == "w" ||
          allowedForEnPassant(piece, historyEnPassant)[0])
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
    // castling
    if (onlyControl) {
      if (piece.color == "b") {
        if (
          historyCastling.kingsideBlack &&
          scene[0][5][0] == "e" &&
          scene[0][6][0] == "e" &&
          !boxIsAttacked(
            scene,
            [0, 5],
            piece.color,
            historyCastling,
            historyEnPassant
          ) &&
          !boxIsAttacked(
            scene,
            [0, 6],
            piece.color,
            historyCastling,
            historyEnPassant
          )
        ) {
          arrayAllowedPositions = [...arrayAllowedPositions, [0, 6]];
        }
        if (
          historyCastling.queensideBlack &&
          scene[0][1][0] == "e" &&
          scene[0][2][0] == "e" &&
          scene[0][3][0] == "e" &&
          !boxIsAttacked(
            scene,
            [0, 1],
            piece.color,
            historyCastling,
            historyEnPassant
          ) &&
          !boxIsAttacked(
            scene,
            [0, 2],
            piece.color,
            historyCastling,
            historyEnPassant
          ) &&
          !boxIsAttacked(
            scene,
            [0, 3],
            piece.color,
            historyCastling,
            historyEnPassant
          )
        ) {
          arrayAllowedPositions = [...arrayAllowedPositions, [0, 2]];
        }
      }
      if (piece.color == "w") {
        if (
          historyCastling.kingsideWhite &&
          scene[7][5][0] == "e" &&
          scene[7][6][0] == "e" &&
          !boxIsAttacked(
            scene,
            [7, 5],
            piece.color,
            historyCastling,
            historyEnPassant
          ) &&
          !boxIsAttacked(
            scene,
            [7, 6],
            piece.color,
            historyCastling,
            historyEnPassant
          )
        ) {
          arrayAllowedPositions = [...arrayAllowedPositions, [7, 6]];
        }
        if (
          historyCastling.queensideWhite &&
          scene[7][1][0] == "e" &&
          scene[7][2][0] == "e" &&
          scene[7][3][0] == "e" &&
          !boxIsAttacked(
            scene,
            [7, 1],
            piece.color,
            historyCastling,
            historyEnPassant
          ) &&
          !boxIsAttacked(
            scene,
            [7, 2],
            piece.color,
            historyCastling,
            historyEnPassant
          ) &&
          !boxIsAttacked(
            scene,
            [7, 3],
            piece.color,
            historyCastling,
            historyEnPassant
          )
        ) {
          arrayAllowedPositions = [...arrayAllowedPositions, [7, 2]];
        }
      }
    }
  }
  //tower and queen
  if (piece.piece == "R" || piece.piece == "Q") {
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
  //Knight
  if (piece.piece == "N") {
    let array = [
      [piece.position[0] - 1, piece.position[1] - 2],
      [piece.position[0] - 2, piece.position[1] - 1],
      [piece.position[0] - 2, piece.position[1] + 1],
      [piece.position[0] - 1, piece.position[1] + 2],
      [piece.position[0] + 2, piece.position[1] + 1],
      [piece.position[0] + 2, piece.position[1] - 1],
      [piece.position[0] + 1, piece.position[1] + 2],
      [piece.position[0] + 1, piece.position[1] - 2],
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

  return arrayAllowedPositions;
};
