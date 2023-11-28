import { deepCopySceneArray } from "./deepCopySceneArray";

export const changeScene = (scene, piece, position, promotion = false) => {
  let change = deepCopySceneArray(scene);
  if (!promotion) {
    if (piece.position[0] == position[0] && piece.position[1] == position[1]) {
    } else {
      if (
        //castling
        piece.piece == "K" &&
        (piece.position[1] - position[1] == 2 ||
          piece.position[1] - position[1] == -2)
      ) {
        console.log();
        if (piece.color == "w") {
          if (position[1] == 2) {
            change[7][0] = ["e", null];
            change[7][4] = ["e", null];
            change[7][2] = ["w", "K"];
            change[7][3] = ["w", "R"];
          } else {
            change[7][7] = ["e", null];
            change[7][4] = ["e", null];
            change[7][6] = ["w", "K"];
            change[7][5] = ["w", "R"];
          }
        } else {
          //black
          if (piece.color == "b") {
            if (position[1] == 2) {
              change[0][0] = ["e", null];
              change[0][4] = ["e", null];
              change[0][2] = ["b", "K"];
              change[0][3] = ["b", "R"];
            } else {
              change[0][7] = ["e", null];
              change[0][4] = ["e", null];
              change[0][6] = ["b", "K"];
              change[0][5] = ["b", "R"];
            }
          }
        }
      } else {
        if (
          piece.piece == "p" &&
          piece.position[1] != position[1] &&
          change[position[0]][position[1]][0] == "e"
        ) {
          change[position[0]][position[1]] = [piece.color, piece.piece];
          change[piece.position[0]][piece.position[1]] = ["e", null];
          if (piece.color == "w") {
            change[3][position[1]] = ["e", null];
          } else {
            change[4][position[1]] = ["e", null];
          }
        } else {
          change[position[0]][position[1]] = [piece.color, piece.piece];
          change[piece.position[0]][piece.position[1]] = ["e", null];
        }
      }
    }
  } else {
    change[position[0]][position[1]] = [piece.color, piece.piece];
    change[piece.position[0]][piece.position[1]] = ["e", null];
  }
  return change;
};
