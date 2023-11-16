export const changeScene = (scene, piece, position) => {
  let change = scene;
  if (piece.position[0] == position[0] && piece.position[1] == position[1]) {
  } else {
    change[position[0]][position[1]] = [piece.color, piece.piece];
    change[piece.position[0]][piece.position[1]] = ["e", null];
  }
  return change;
};