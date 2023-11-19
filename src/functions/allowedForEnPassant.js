export const allowedForEnPassant = (pawn, historyEnPassant) => {
  let BoxAllowed = [false, false];
  if (pawn.position[0] == 3 && pawn.color == "w") {
    if (historyEnPassant.black[pawn.position[1] - 1]) {
      BoxAllowed[0] = true;
    }
    if (historyEnPassant.black[pawn.position[1] + 1]) {
      BoxAllowed[1] = true;
    }
  }
  if (pawn.position[0] == 4 && pawn.color == "b") {
    if (historyEnPassant.white[pawn.position[1] - 1]) {
      BoxAllowed[0] = true;
    }
    if (historyEnPassant.white[pawn.position[1] + 1]) {
      BoxAllowed[1] = true;
    }
  }
  console.log(BoxAllowed);
  return BoxAllowed;
};
