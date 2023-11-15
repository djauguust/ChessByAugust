import React, { useState } from "react";
import { Board } from "./Board";
import { getInitialGame } from "./functions/getInitialGame";
import { DataContext } from "./context/DataContext";

export const Game = () => {
  const [sceneGame, setSceneGame] = useState(getInitialGame());

  //DataContext
  const [raisedPiece, setRaisedPiece] = useState(null);
  const dataMain = { raisedPiece, setRaisedPiece, sceneGame, setSceneGame };

  return (
    <DataContext.Provider value={dataMain}>
      <Board scene={sceneGame} />;
    </DataContext.Provider>
  );
};
