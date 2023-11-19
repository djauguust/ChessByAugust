import { getPossibleMoviments } from "./getPossibleMoviments";

export const boxIsAttacked = (
  scene,
  box,
  color,
  historyCastling,
  historyEnPassant
) => {
  let b = false;
  let array = [];
  let piece;
  console.log("entro");
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (scene[i][j][0] != "e" && scene[i][j][0] != color) {
        piece = {
          piece: scene[i][j][1],
          color: scene[i][j][0],
          position: [i, j],
        };

        array = getPossibleMoviments(
          scene,
          piece,
          historyCastling,
          false,
          historyEnPassant
        );

        let array2 = array.filter((e) => e[0] === box[0] && e[1] === box[1]);
        if (array2.length != 0) {
          b = true;
        }
      }
    }
  }
  return b;
};
