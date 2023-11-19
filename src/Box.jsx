import React, { useContext } from "react";
import { DataContext } from "./context/DataContext";
import { changeScene } from "./functions/changeScene";
import { getPossibleMoviments } from "./functions/getPossibleMoviments";

export const Box = ({ position, value = null }) => {
  const url = "/src/assets/images";
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
  } = useContext(DataContext);

  const urlImagen = () => {
    return `${url}/${value[0] === "b" ? `black` : `white`}/${value[1]}.png`;
  };

  const handleClick = () => {
    if (!raisedPiece) {
      if (!isEmpty()) {
        let piece = {
          color: `${value[0]}`,
          piece: `${value[1]}`,
          position: position,
        };
        setRaisedPiece(piece);
        setpossibleMoviments(
          getPossibleMoviments(
            sceneGame,
            piece,
            historyCastling,
            true,
            historyEnPassant
          )
        );
      }
    } else {
      setSceneGame(changeScene(sceneGame, raisedPiece, position));
      if (!isEqual(raisedPiece.position, position)) {
        enPassant();
      }
      castling(raisedPiece, historyCastling);
      setRaisedPiece(null);
      setpossibleMoviments(null);
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
      className = "btn btn-warning";
    } else {
      if (raisedPiece && isAllowed() && !isEmpty()) {
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
    }
    if (aux) {
      setHistoryCastling(aux);
    }
    return;
  }

  function enPassant() {
    let arrayFalse = [false, false, false, false, false, false, false, false];
    let b = true;
    if (raisedPiece.piece == "p") {
      if (raisedPiece.color == "w") {
        let compare = [raisedPiece.position[0] - 2, raisedPiece.position[1]];
        if (isEqual(compare, position)) {
          let falses = [false, false, false, false, false, false, false, false];
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
          let falses = [false, false, false, false, false, false, false, false];
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

  return (
    <button
      type="button"
      className={boxClassName()}
      style={{ height: 72, width: 72 }}
      onClick={() => handleClick()}
    >
      {!isEmpty() && (
        <a>
          <img
            src={urlImagen()}
            alt=""
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
        </a>
      )}
      {isAllowed() && isEmpty() && (
        <div className="spinner-grow text-warning" role="status"></div>
      )}
    </button>
  );
};
