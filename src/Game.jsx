import React, { useState } from "react";
import { Board } from "./Board";
import { getInitialGame } from "./functions/getInitialGame";
import { DataContext } from "./context/DataContext";

export const Game = () => {
  //DataContext
  const [raisedPiece, setRaisedPiece] = useState(null);
  const [sceneGame, setSceneGame] = useState(getInitialGame());
  const [possibleMoviments, setpossibleMoviments] = useState(null);
  const [historyCastling, setHistoryCastling] = useState({
    kingsideBlack: true,
    queensideBlack: true,
    kingsideWhite: true,
    queensideWhite: true,
  });
  const [historyEnPassant, setHistoryEnPassant] = useState({
    black: [false, false, false, false, false, false, false, false],
    white: [false, false, false, false, false, false, false, false],
  });
  const dataMain = {
    raisedPiece,
    setRaisedPiece,
    sceneGame,
    setSceneGame,
    possibleMoviments,
    setpossibleMoviments,
    historyCastling,
    setHistoryCastling,
    historyEnPassant,
    setHistoryEnPassant,
  };
  console.log(sceneGame);
  
  return (
    <DataContext.Provider value={dataMain}>
      <Board scene={sceneGame} />;
    </DataContext.Provider>
  );
};
