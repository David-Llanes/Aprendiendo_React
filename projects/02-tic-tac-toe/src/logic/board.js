import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
  // Revisar todas las combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      // Si las 3 posiciones consecutivas tienen el mismo simbolo, regresamos el simbolo y asi sabemos quien ha ganado.
      return boardToCheck[a];
    }
  }
};

export const checkEndGame = (boardToCheck) => {
  // Si cada elemento del array es diferente de null, regresará true
  // .every itera sobre un array y evalua una condicion a cada elemento, si todos los elementos cumplen con la condicion, regresa true
  return boardToCheck.every((element) => element !== null);
};

export const saveGameToStorage = ({ board, turn }) => {
  // guardar aqui partida
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};

export const resetGameStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
