import React from "react";

export const getInitialGame = () => {
  const board = [
    [
      ["b", "T"],
      ["b", "C"],
      ["b", "A"],
      ["b", "R"],
      ["b", "D"],
      ["b", "A"],
      ["b", "C"],
      ["b", "T"],
    ],
    [
      ["b", "p"],
      ["b", "p"],
      ["b", "p"],
      ["b", "P"],
      ["b", "p"],
      ["b", "P"],
      ["b", "p"],
      ["b", "p"],
    ],

    [
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
    ],
    [
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
    ],
    [
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
    ],
    [
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
      ["e", null],
    ],

    [
      ["w", "p"],
      ["w", "p"],
      ["w", "p"],
      ["w", "P"],
      ["w", "p"],
      ["w", "P"],
      ["w", "p"],
      ["w", "p"],
    ],
    [
      ["w", "T"],
      ["w", "C"],
      ["w", "A"],
      ["w", "R"],
      ["w", "D"],
      ["w", "A"],
      ["w", "C"],
      ["w", "T"],
    ],
  ];
  return board;
};
