import React from "react";

export const Box = ({ position, value = null }) => {
  let c = (position[0] + position[1]) % 2;
  console.log(value);
  return (
    <button
      type="button"
      className={c === 1 ? "btn btn-light" : "btn btn-dark"}
      style={{ height: 72, width: 72 }}
    >
      {value[1]}
    </button>
  );
};
