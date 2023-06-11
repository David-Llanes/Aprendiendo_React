import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import {
  checkWinner,
  checkEndGame,
  resetGameStorage,
  saveGameToStorage,
} from "./logic/board.js";
import { Board } from "./components/Board.jsx";

function App() {
  // Variables de estado
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    console.log(boardFromStorage);
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    //return turnFromStorage ? turnFromStorage : TURNS.X
    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  // Metodos para trabajar con estados
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  const updateBoard = (index) => {
    // No actualizamos la posicion si ya tiene algo o si ya hay ganador.
    if (board[index] || winner) return;

    // Llenamos el arreglo de 9 con la X o la O segun el turno.
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiamos de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
    });

    // Revisar si hay ganador.
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>

      <Board board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {/* Mandamos a llamar el compoennte que muestra el modal del ganador*/}
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
