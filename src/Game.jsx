import React, { useState } from "react";
import { Board } from "./Board";
import { getInitialGame } from "./functions/getInitialGame";
import { DataContext } from "./context/DataContext";

export const Game = () => {
  //DataContext
  const [raisedPiece, setRaisedPiece] = useState(null);
  const [sceneGame, setSceneGame] = useState(getInitialGame());
  const [possibleMoviments, setpossibleMoviments] = useState(null);
  const dataMain = {
    raisedPiece,
    setRaisedPiece,
    sceneGame,
    setSceneGame,
    possibleMoviments,
    setpossibleMoviments,
  };

  return (
    <DataContext.Provider value={dataMain}>
      <Board scene={sceneGame} />;
    </DataContext.Provider>
  );
};
