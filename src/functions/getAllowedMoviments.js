import { boxIsAttacked } from "./boxIsAttacked";
import { changeScene } from "./changeScene";
import { getKingPositionByColor } from "./getKingPositionByColor";

export const getAllowedMoviments = (
  possibleMoviments,
  piece,
  scene,
  historyCastling,
  historyEnPassant
) => {
  let array = [];
  let fictionalScene;
  if (piece.piece == "K") {
    //if the king is in check
    possibleMoviments.map((e) => {
      fictionalScene = [...changeScene(scene, piece, e)];

      if (
        !boxIsAttacked(
          fictionalScene,
          e,
          piece.color,
          historyCastling,
          historyEnPassant
        )
      ) {
        array = [...array, e];
      }
    });
  } else {
    // if a piece is pinned or must be pinned
    possibleMoviments.map((e) => {
      fictionalScene = [...changeScene(scene, piece, e)];

      if (
        !boxIsAttacked(
          fictionalScene,
          getKingPositionByColor(scene, piece.color),
          piece.color,
          historyCastling,
          historyEnPassant
        )
      ) {
        array = [...array, e];
      }
    });
  }

  return array;
};
