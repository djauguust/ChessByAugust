import React, { useEffect, useState } from "react";
import { Board } from "./Board";
import { getInitialGame } from "./functions/getInitialGame";
import { DataContext } from "./context/DataContext";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { checkMate } from "./functions/checkMate";

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
  const [whiteIsNext, setWhiteIsNext] = useState(true);
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
    whiteIsNext,
    setWhiteIsNext,
  };

  //Game
  const [start, setStart] = useState(null);
  const [winner, setWinner] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [showModalWin, setShowModalWin] = useState(false);

  function isFirstGame() {
    console.log(start);
    if (!start) {
      console.log(true);
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (checkMate("w", sceneGame, historyCastling, historyEnPassant)) {
      setWinner("b");
      setShowModalWin(true);
    }
    if (checkMate("b", sceneGame, historyCastling, historyEnPassant)) {
      setWinner("w");
      setShowModalWin(true);
    }
  }, [sceneGame]);

  return (
    <DataContext.Provider value={dataMain}>
      <Row>
        <Col>
          <div className="d-none d-md-block">
            <Board scene={sceneGame} responsive="xl" />;
          </div>
          <div className="d-block d-md-none">
            <Board scene={sceneGame} responsive="sm" />;
          </div>
        </Col>
        {isFirstGame ? (
          <Modal show={showModal}>
            <Modal.Header>
              <Modal.Title>¡Bienvenido a ChessByAugust!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                Faltan cosas: - Si se come una torre que tenía permitido enrocar, el rey
                se demora un turno en saber que no puede hacerlo ya.
              </p>
              <p>A agregar: - Cronómetro - Piezas comidas afueras</p>
              <p>¿Sugerencias? email: dj.august.brito@gmail.com</p>

              <p>¿Listos para iniciar una partida?</p>
            </Modal.Body>

            <Modal.Footer>
              {/* <Button variant="secondary">Close</Button> */}
              <Button variant="success" onClick={() => setShowModal(false)}>
                <b>Sí</b>
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          ""
        )}

        <Modal show={showModalWin}>
          <Modal.Header>
            <Modal.Title>¡Partida terminada!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              ¡Felicidades! Han ganado las{" "}
              {winner == "w" ? "blancas" : "negras"}. ¿Deseas iniciar una nueva
              partida?
            </p>
          </Modal.Body>

          <Modal.Footer>
            {/* <Button variant="secondary">Close</Button> */}
            <Button
              variant="success"
              onClick={() => {
                setShowModalWin(false);
                setStart(false);
                setSceneGame(getInitialGame());
                setWhiteIsNext(true);
              }}
            >
              <b>Sí</b>
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </DataContext.Provider>
  );
};
