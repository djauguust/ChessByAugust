import React from "react";

export const getInitialGame = () => {
  const board = [
    [
      ["b", "T"],
      ["b", "N"],
      ["b", "B"],
      ["b", "K"],
      ["b", "Q"],
      ["b", "B"],
      ["b", "N"],
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
      ["w", "N"],
      ["w", "B"],
      ["w", "K"],
      ["w", "Q"],
      ["w", "B"],
      ["w", "N"],
      ["w", "T"],
    ],
  ];
  return board;
};
