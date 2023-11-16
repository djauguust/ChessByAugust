import React from "react";

export const getInitialGame = () => {
  const board = [
    [
      ["b", "T"],
      ["b", "N"],
      ["b", "B"],
      ["b", "Q"],
      ["b", "K"],
      ["b", "B"],
      ["b", "N"],
      ["b", "T"],
    ],
    [
      ["b", "p"],
      ["b", "p"],
      ["b", "p"],
      ["b", "p"],
      ["b", "p"],
      ["b", "p"],
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
      ["w", "p"],
      ["w", "p"],
      ["w", "p"],
      ["w", "p"],
      ["w", "p"],
    ],
    [
      ["w", "T"],
      ["w", "N"],
      ["w", "B"],
      ["w", "Q"],
      ["w", "K"],
      ["w", "B"],
      ["w", "N"],
      ["w", "T"],
    ],
  ];
  return board;
};
