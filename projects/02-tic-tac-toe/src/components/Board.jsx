import React from "react";
import { Square } from "./Square.jsx";

export function Board({ board, updateBoard }) {
  return (
    <section className="game">
      {board.map((valor, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {valor}
          </Square>
        );
      })}
    </section>
  );
}
