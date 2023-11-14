import React, { useState } from "react";
import { Board } from "./Board";
import { getInitialGame } from "./getInitialGame";
import { DataContext } from "./context/DataContext";

export const Game = () => {
  let initial = getInitialGame();

  //DataContext
  const [raisedPiece, setRaisedPiece] = useState(null);
  const dataMain = { raisedPiece, setRaisedPiece };

  return (
    <DataContext.Provider value={dataMain}>
      <Board scene={initial} />;
    </DataContext.Provider>
  );
};
