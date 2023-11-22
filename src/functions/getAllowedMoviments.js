import { boxIsAttacked } from "./boxIsAttacked";
import { changeScene } from "./changeScene";

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
      console.log(e);
      fictionalScene = [...changeScene(scene, piece, e)];
      console.log(fictionalScene);
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
    // if a piece is pinned
    array = possibleMoviments;
  }
  console.log(array);

  return array;
};
