import React from "react";

export const Box = ({ position, value = null }) => {
  const url = "/src/assets/images";
  let c = (position[0] + position[1]) % 2;

  const urlImagen = () => {
    return `${url}/${value[0] === "b" ? `black` : `white`}/${value[1]}.png`;
  };

  return (
    <button
      type="button"
      className={c === 1 ? "btn btn-light" : "btn btn-dark"}
      style={{ height: 72, width: 72 }}
    >
      {value[0] != "e" && (
        <img
          src={urlImagen()}
          alt=""
          width="50"
          height="50"
          className="d-inline-block align-text-top"
        />
      )}
    </button>
  );
};
