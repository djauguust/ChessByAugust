import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./context/DataContext";
import { changeScene } from "./functions/changeScene";
import { getPossibleMoviments } from "./functions/getPossibleMoviments";
import { Col, Modal, Row } from "react-bootstrap";
import { getAllowedMoviments } from "./functions/getAllowedMoviments";
import { boxIsAttacked } from "./functions/boxIsAttacked";

export const Box = ({ position, value, responsive }) => {
  const url = "../../images";
  let c = (position[0] + position[1] + 1) % 2;
  const {
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
  } = useContext(DataContext);

  const urlImagen = (value) => {
    return new URL(
      `${url}/${value[0] === "b" ? `black` : `white`}/${value[1]}.png`,
      import.meta.url
    ).href;
  };

  const handleClick = () => {
    if (!raisedPiece) {
      if (!isEmpty() && whiteIsNext == (value[0] == "w")) {
        let piece = {
          color: `${value[0]}`,
          piece: `${value[1]}`,
          position: position,
        };
        setRaisedPiece(piece);
        setpossibleMoviments(
          getAllowedMoviments(
            getPossibleMoviments(
              sceneGame,
              piece,
              historyCastling,
              true,
              historyEnPassant
            ),
            piece,
            sceneGame,
            historyCastling,
            historyEnPassant
          )
        );
      }
    } else {
      if (/* isAllowed() || isEqual(raisedPiece.position, position) */true) {
        if (promotion()) {
          setShowModal(true);
        } else {
          setSceneGame(changeScene(sceneGame, raisedPiece, position));
          enPassant();
          castling(raisedPiece, historyCastling);
          setRaisedPiece(null);
          setpossibleMoviments(null);
          if (!isEqual(raisedPiece.position, position)) {
            setWhiteIsNext(!whiteIsNext);
          }
        }
      }
    }
  };

  function isEqual(a, b) {
    if (a == null) {
      return false;
    }
    return a[0] === b[0] && a[1] === b[1];
  }

  function boxClassName() {
    let className;
    if (isEqual(raisedPiece?.position, position)) {
      // todo, what if is the king attacked
      className = "btn btn-warning";
    } else {
      if (
        (raisedPiece && isAllowed() && !isEmpty()) ||
        (boxIsAttacked(
          sceneGame,
          position,
          value[0],
          historyCastling,
          historyEnPassant
        ) &&
          value[1] == "K")
      ) {
        className = "btn btn-danger";
      } else {
        if (c === 1) {
          className = "btn btn-light";
        } else {
          className = "btn btn-secondary";
        }
      }
    }
    return className;
  }
  /* if (possibleMoviments && possibleMoviments != []) {
    console.log(possibleMoviments);
  } */

  function isEmpty() {
    return value[0] == "e";
  }

  function oppositeColor(color) {
    if (color == "w") {
      return "b";
    }
    if (color == "b") {
      return "w";
    }
    return null;
  }

  function isAllowed() {
    let b = false;
    if (raisedPiece) {
      possibleMoviments?.map((e) => {
        if (isEqual(e, position)) {
          b = true;
        }
      });
    }
    return b;
  }

  function castling(raisedPiece, historyCastling) {
    let aux;
    if (!isEqual(raisedPiece.position, position)) {
      if (raisedPiece.piece == "K" && raisedPiece.color == "w") {
        aux = {
          ...historyCastling,
          kingsideWhite: false,
          queensideWhite: false,
        };
      }
      if (raisedPiece.piece == "K" && raisedPiece.color == "b") {
        aux = {
          ...historyCastling,
          kingsideBlack: false,
          queensideBlack: false,
        };
      }
      if (raisedPiece.piece == "R" && raisedPiece.color == "w") {
        if (raisedPiece.position[1] == 0) {
          aux = {
            ...historyCastling,
            queensideWhite: false,
          };
        }
        if (raisedPiece.position[1] == 7) {
          aux = {
            ...historyCastling,
            kingsideWhite: false,
          };
        }
      }
      if (raisedPiece.piece == "R" && raisedPiece.color == "b") {
        if (raisedPiece.position[1] == 0) {
          aux = {
            ...historyCastling,
            queensideBlack: false,
          };
        }
        if (raisedPiece.position[1] == 7) {
          aux = {
            ...historyCastling,
            kingsideBlack: false,
          };
        }
      }
      if (sceneGame[0][0][0] != "b") {
        aux = {
          ...historyCastling,
          queensideBlack: false,
        };
      }
      if (sceneGame[0][7][0] != "b") {
        aux = {
          ...historyCastling,
          kingsideBlack: false,
        };
      }
      if (sceneGame[7][0][0] != "w") {
        aux = {
          ...historyCastling,
          queensideWhite: false,
        };
      }
      if (sceneGame[7][7][0] != "w") {
        aux = {
          ...historyCastling,
          kingsideWhite: false,
        };
      }
    }
    if (aux) {
      setHistoryCastling(aux);
    }
    return;
  }

  function enPassant() {
    if (!isEqual(raisedPiece.position, position)) {
      let arrayFalse = [false, false, false, false, false, false, false, false];
      let b = true;
      if (raisedPiece.piece == "p") {
        if (raisedPiece.color == "w") {
          let compare = [raisedPiece.position[0] - 2, raisedPiece.position[1]];
          if (isEqual(compare, position)) {
            let falses = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            falses.map((e, index) => {
              if (index == raisedPiece.position[1]) {
                falses[index] = true;
              }
            });
            setHistoryEnPassant({ black: arrayFalse, white: falses });
            b = false;
          }
        } else {
          let compare = [raisedPiece.position[0] + 2, raisedPiece.position[1]];
          if (isEqual(compare, position)) {
            let falses = [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ];
            falses.map((e, index) => {
              if (index == raisedPiece.position[1]) {
                falses[index] = true;
              }
            });
            setHistoryEnPassant({ white: arrayFalse, black: falses });
            b = false;
          }
        }
      }
      if (b) {
        setHistoryEnPassant({ white: arrayFalse, black: arrayFalse });
      }
    }
  }

  const [showModal, setShowModal] = useState(false);
  function promotion() {
    let b = false;
    if (raisedPiece.piece == "p") {
      if (
        (raisedPiece.color == "w" && position[0] == 0) ||
        (raisedPiece.color == "b" && position[0] == 7)
      ) {
        b = true;
      }
    }
    return b;
  }

  function promotionPawn(newPiece, raisedPiece) {
    let piece = {
      color: raisedPiece.color,
      piece: newPiece,
      position: raisedPiece.position,
    };
    setSceneGame(changeScene(sceneGame, piece, position, true));
    setShowModal(false);
    setRaisedPiece(null);
    setpossibleMoviments(null);
    setWhiteIsNext(!whiteIsNext);
  }

  function sizeGame() {
    let aux = { box: null, piece: null };
    let widthBox = window.innerWidth / 8 - 3;
    if (responsive == "sm") {
      aux = { box: widthBox, piece: widthBox / 1.44 };
    } else {
      aux = { box: 72, piece: 50 };
    }
    return aux;
  }

  return (
    <>
      <button
        type="button"
        className={`${boxClassName()}`}
        style={{ height: sizeGame().box, width: sizeGame().box }}
        onClick={() => handleClick()}
      >
        {!isEmpty() && (
          <a>
            <img
              src={urlImagen(value)}
              alt=""
              width={sizeGame().piece}
              height={sizeGame().piece}
              className="d-inline-block align-text"
            />
          </a>
        )}
        {isAllowed() && isEmpty() && (
          <div
            className={`spinner-grow ${
              responsive == "sm" ? "spinner-grow-sm" : ""
            } text-warning`}
            role="status"
          ></div>
        )}
      </button>
      {/* <!-- Modal --> */}

      <Modal show={showModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Promocione su peón</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-inline-block align-text-top">
          <Row className="px-4">
            <Col>
              <button
                type="button"
                className="btn btn-success me-2"
                style={{ height: 72, width: 72 }}
                onClick={() => promotionPawn("Q", raisedPiece)}
              >
                <a>
                  <img
                    src={urlImagen([oppositeColor(value[0]), "Q"])}
                    alt=""
                    width="50"
                    height="50"
                    className="d-inline-block align-text-top"
                  />
                </a>
              </button>
            </Col>
            <Col>
              <button
                type="button"
                className="btn btn-success me-2"
                style={{ height: 72, width: 72 }}
                onClick={() => promotionPawn("R", raisedPiece)}
              >
                <a>
                  <img
                    src={urlImagen([oppositeColor(value[0]), "R"])}
                    alt=""
                    width="50"
                    height="50"
                    className="d-inline-block align-text-top"
                  />
                </a>
              </button>
            </Col>
            <Col>
              <button
                type="button"
                className="btn btn-success me-2"
                style={{ height: 72, width: 72 }}
                onClick={() => promotionPawn("N", raisedPiece)}
              >
                <a>
                  <img
                    src={urlImagen([oppositeColor(value[0]), "N"])}
                    alt=""
                    width="50"
                    height="50"
                    className="d-inline-block align-text-top"
                  />
                </a>
              </button>
            </Col>
            <Col>
              <button
                type="button"
                className="btn btn-success me-2"
                style={{ height: 72, width: 72 }}
                onClick={() => promotionPawn("B", raisedPiece)}
              >
                <a>
                  <img
                    src={urlImagen([oppositeColor(value[0]), "B"])}
                    alt=""
                    width="50"
                    height="50"
                    className="d-inline-block align-text-top"
                  />
                </a>
              </button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
