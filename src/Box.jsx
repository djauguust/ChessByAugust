import React, { useContext } from "react";
import { DataContext } from "./context/DataContext";
import { changeScene } from "./functions/changeScene";

export const Box = ({ position, value = null }) => {
  const url = "/src/assets/images";
  let c = (position[0] + position[1]) % 2;
  const { raisedPiece, setRaisedPiece, sceneGame, setSceneGame } =
    useContext(DataContext);

  const urlImagen = () => {
    return `${url}/${value[0] === "b" ? `black` : `white`}/${value[1]}.png`;
  };

  const handleClick = () => {
    if (!raisedPiece) {
      if (value[0] != "e") {
        let piece = {
          color: `${value[0]}`,
          piece: `${value[1]}`,
          position: position,
        };
        setRaisedPiece(piece);
      }
    } else {
      setSceneGame(changeScene(sceneGame, raisedPiece, position));
      setRaisedPiece(null);
    }
  };

  function isEqual(a, b) {
    if (a == null) {
      return false;
    }
    return a[0] === b[0] && a[1] === b[1];
  }

  return (
    <button
      type="button"
      className={
        isEqual(raisedPiece?.position, position)
          ? "btn btn-warning"
          : `${c === 1 ? "btn btn-light" : "btn btn-dark"}`
      }
      style={{ height: 72, width: 72 }}
      onClick={() => handleClick()}
    >
      {value[0] != "e" && (
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
    </button>
  );
};
