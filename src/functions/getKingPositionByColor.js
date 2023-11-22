export const getKingPositionByColor = (scene, color) => {
  let position;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (scene[i][j][0] == color && scene[i][j][1] == "K") {
        position = [i, j];
      }
    }
  }
  return position;
};
