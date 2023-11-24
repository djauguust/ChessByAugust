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
      <div className="d-none d-md-block">
        <Board scene={sceneGame} responsive="xl" />;
      </div>
      <div className="d-block d-md-none">
        <Board scene={sceneGame} responsive="sm" />;
      </div>
    </DataContext.Provider>
  );
};
