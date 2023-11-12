import React from "react";
import { Box } from "./box";
import { getInitialGame } from "./getInitialGame";

export const Board = () => {
    let initial = getInitialGame();
    
  return (
    <>
      <div>
        <Box position={[0, 0]} value={initial[0][0]}/>
        <Box position={[0, 1]} value={initial[0][1]}/>
        <Box position={[0, 2]} value={initial[0][2]}/>
        <Box position={[0, 3]} value={initial[0][3]}/>
        <Box position={[0, 4]} value={initial[0][4]}/>
        <Box position={[0, 5]} value={initial[0][5]}/>
        <Box position={[0, 6]} value={initial[0][6]}/>
        <Box position={[0, 7]} value={initial[0][7]}/>
      </div>
      <div>
        <Box position={[1, 0]} value={initial[1][0]}/>
        <Box position={[1, 1]} value={initial[1][1]}/>
        <Box position={[1, 2]} value={initial[1][2]}/>
        <Box position={[1, 3]} value={initial[1][3]}/>
        <Box position={[1, 4]} value={initial[1][4]}/>
        <Box position={[1, 5]} value={initial[1][5]}/>
        <Box position={[1, 6]} value={initial[1][6]}/>
        <Box position={[1, 7]} value={initial[1][7]}/>
      </div>
      <div>
        <Box position={[2, 0]} value={initial[2][0]}/>
        <Box position={[2, 1]} value={initial[2][1]}/>
        <Box position={[2, 2]} value={initial[2][2]}/>
        <Box position={[2, 3]} value={initial[2][3]}/>
        <Box position={[2, 4]} value={initial[2][4]}/>
        <Box position={[2, 5]} value={initial[2][5]}/>
        <Box position={[2, 6]} value={initial[2][6]}/>
        <Box position={[2, 7]} value={initial[2][7]}/>
      </div>
      <div>
        <Box position={[3, 0]} value={initial[3][0]}/>
        <Box position={[3, 1]} value={initial[3][1]}/>
        <Box position={[3, 2]} value={initial[3][2]}/>
        <Box position={[3, 3]} value={initial[3][3]}/>
        <Box position={[3, 4]} value={initial[3][4]}/>
        <Box position={[3, 5]} value={initial[3][5]}/>
        <Box position={[3, 6]} value={initial[3][6]}/>
        <Box position={[3, 7]} value={initial[3][7]}/>
      </div>
      <div>
        <Box position={[4, 0]} value={initial[4][0]}/>
        <Box position={[4, 1]} value={initial[4][1]}/>
        <Box position={[4, 2]} value={initial[4][2]}/>
        <Box position={[4, 3]} value={initial[4][3]}/>
        <Box position={[4, 4]} value={initial[4][4]}/>
        <Box position={[4, 5]} value={initial[4][5]}/>
        <Box position={[4, 6]} value={initial[4][6]}/>
        <Box position={[4, 7]} value={initial[4][7]}/>
      </div>
      <div>
        <Box position={[5, 0]} value={initial[5][0]}/>
        <Box position={[5, 1]} value={initial[5][1]}/>
        <Box position={[5, 2]} value={initial[5][2]}/>
        <Box position={[5, 3]} value={initial[5][3]}/>
        <Box position={[5, 4]} value={initial[5][4]}/>
        <Box position={[5, 5]} value={initial[5][5]}/>
        <Box position={[5, 6]} value={initial[5][6]}/>
        <Box position={[5, 7]} value={initial[5][7]}/>
      </div>
      <div>
        <Box position={[6, 0]} value={initial[6][0]}/>
        <Box position={[6, 1]} value={initial[6][1]}/>
        <Box position={[6, 2]} value={initial[6][2]}/>
        <Box position={[6, 3]} value={initial[6][3]}/>
        <Box position={[6, 4]} value={initial[6][4]}/>
        <Box position={[6, 5]} value={initial[6][5]}/>
        <Box position={[6, 6]} value={initial[6][6]}/>
        <Box position={[6, 7]} value={initial[6][7]}/>
      </div>
      <div>
        <Box position={[7, 0]} value={initial[7][0]}/>
        <Box position={[7, 1]} value={initial[7][1]}/>
        <Box position={[7, 2]} value={initial[7][2]}/>
        <Box position={[7, 3]} value={initial[7][3]}/>
        <Box position={[7, 4]} value={initial[7][4]}/>
        <Box position={[7, 5]} value={initial[7][5]}/>
        <Box position={[7, 6]} value={initial[7][6]}/>
        <Box position={[7, 7]} value={initial[7][7]}/>
      </div>
    </>
  );
};
