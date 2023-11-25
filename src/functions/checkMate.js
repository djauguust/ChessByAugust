import { boxIsAttacked } from "./boxIsAttacked";
import { getAllowedMoviments } from "./getAllowedMoviments";
import { getKingPositionByColor } from "./getKingPositionByColor";
import { getPossibleMoviments } from "./getPossibleMoviments";

export const checkMate = (color, scene, historyCastling, historyEnPassant) => {
  let positionKing = getKingPositionByColor(scene, color);
  let checkMate = false;
  if (
    boxIsAttacked(scene, positionKing, color, historyCastling, historyEnPassant)
  ) {
    checkMate = true;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (scene[i][j][0] == color) {
          let piece = {
            piece: scene[i][j][1],
            color: scene[i][j][0],
            position: [i, j],
          };
          let array = getAllowedMoviments(
            getPossibleMoviments(
              scene,
              piece,
              historyCastling,
              true,
              historyEnPassant
            ),
            piece,
            scene,
            historyCastling,
            historyEnPassant
          );
          if (array.length != 0) {
            checkMate = false;
          }
        }
      }
    }
  }

  return checkMate;
};
