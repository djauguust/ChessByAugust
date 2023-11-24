import React from "react";
import { Box } from "./Box.jsx";

export const Board = ({ scene = null, responsive }) => {
  return (
    <>
      <div>
        <Box position={[0, 0]} value={scene[0][0]} responsive={responsive} />
        <Box position={[0, 1]} value={scene[0][1]} responsive={responsive} />
        <Box position={[0, 2]} value={scene[0][2]} responsive={responsive} />
        <Box position={[0, 3]} value={scene[0][3]} responsive={responsive} />
        <Box position={[0, 4]} value={scene[0][4]} responsive={responsive} />
        <Box position={[0, 5]} value={scene[0][5]} responsive={responsive} />
        <Box position={[0, 6]} value={scene[0][6]} responsive={responsive} />
        <Box position={[0, 7]} value={scene[0][7]} responsive={responsive} />
      </div>
      <div>
        <Box position={[1, 0]} value={scene[1][0]} responsive={responsive} />
        <Box position={[1, 1]} value={scene[1][1]} responsive={responsive} />
        <Box position={[1, 2]} value={scene[1][2]} responsive={responsive} />
        <Box position={[1, 3]} value={scene[1][3]} responsive={responsive} />
        <Box position={[1, 4]} value={scene[1][4]} responsive={responsive} />
        <Box position={[1, 5]} value={scene[1][5]} responsive={responsive} />
        <Box position={[1, 6]} value={scene[1][6]} responsive={responsive} />
        <Box position={[1, 7]} value={scene[1][7]} responsive={responsive} />
      </div>
      <div>
        <Box position={[2, 0]} value={scene[2][0]} responsive={responsive} />
        <Box position={[2, 1]} value={scene[2][1]} responsive={responsive} />
        <Box position={[2, 2]} value={scene[2][2]} responsive={responsive} />
        <Box position={[2, 3]} value={scene[2][3]} responsive={responsive} />
        <Box position={[2, 4]} value={scene[2][4]} responsive={responsive} />
        <Box position={[2, 5]} value={scene[2][5]} responsive={responsive} />
        <Box position={[2, 6]} value={scene[2][6]} responsive={responsive} />
        <Box position={[2, 7]} value={scene[2][7]} responsive={responsive} />
      </div>
      <div>
        <Box position={[3, 0]} value={scene[3][0]} responsive={responsive} />
        <Box position={[3, 1]} value={scene[3][1]} responsive={responsive} />
        <Box position={[3, 2]} value={scene[3][2]} responsive={responsive} />
        <Box position={[3, 3]} value={scene[3][3]} responsive={responsive} />
        <Box position={[3, 4]} value={scene[3][4]} responsive={responsive} />
        <Box position={[3, 5]} value={scene[3][5]} responsive={responsive} />
        <Box position={[3, 6]} value={scene[3][6]} responsive={responsive} />
        <Box position={[3, 7]} value={scene[3][7]} responsive={responsive} />
      </div>
      <div>
        <Box position={[4, 0]} value={scene[4][0]} responsive={responsive} />
        <Box position={[4, 1]} value={scene[4][1]} responsive={responsive} />
        <Box position={[4, 2]} value={scene[4][2]} responsive={responsive} />
        <Box position={[4, 3]} value={scene[4][3]} responsive={responsive} />
        <Box position={[4, 4]} value={scene[4][4]} responsive={responsive} />
        <Box position={[4, 5]} value={scene[4][5]} responsive={responsive} />
        <Box position={[4, 6]} value={scene[4][6]} responsive={responsive} />
        <Box position={[4, 7]} value={scene[4][7]} responsive={responsive} />
      </div>
      <div>
        <Box position={[5, 0]} value={scene[5][0]} responsive={responsive} />
        <Box position={[5, 1]} value={scene[5][1]} responsive={responsive} />
        <Box position={[5, 2]} value={scene[5][2]} responsive={responsive} />
        <Box position={[5, 3]} value={scene[5][3]} responsive={responsive} />
        <Box position={[5, 4]} value={scene[5][4]} responsive={responsive} />
        <Box position={[5, 5]} value={scene[5][5]} responsive={responsive} />
        <Box position={[5, 6]} value={scene[5][6]} responsive={responsive} />
        <Box position={[5, 7]} value={scene[5][7]} responsive={responsive} />
      </div>
      <div>
        <Box position={[6, 0]} value={scene[6][0]} responsive={responsive} />
        <Box position={[6, 1]} value={scene[6][1]} responsive={responsive} />
        <Box position={[6, 2]} value={scene[6][2]} responsive={responsive} />
        <Box position={[6, 3]} value={scene[6][3]} responsive={responsive} />
        <Box position={[6, 4]} value={scene[6][4]} responsive={responsive} />
        <Box position={[6, 5]} value={scene[6][5]} responsive={responsive} />
        <Box position={[6, 6]} value={scene[6][6]} responsive={responsive} />
        <Box position={[6, 7]} value={scene[6][7]} responsive={responsive} />
      </div>
      <div>
        <Box position={[7, 0]} value={scene[7][0]} responsive={responsive} />
        <Box position={[7, 1]} value={scene[7][1]} responsive={responsive} />
        <Box position={[7, 2]} value={scene[7][2]} responsive={responsive} />
        <Box position={[7, 3]} value={scene[7][3]} responsive={responsive} />
        <Box position={[7, 4]} value={scene[7][4]} responsive={responsive} />
        <Box position={[7, 5]} value={scene[7][5]} responsive={responsive} />
        <Box position={[7, 6]} value={scene[7][6]} responsive={responsive} />
        <Box position={[7, 7]} value={scene[7][7]} responsive={responsive} />
      </div>
    </>
  );
};
