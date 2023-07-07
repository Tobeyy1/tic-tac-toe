"use client";

import { FunctionComponent, useState } from "react";
import classes from "./GameBoard.module.scss";
import UpdateModal from "./UpdateModal";
import { AnimatePresence, motion } from "framer-motion";

interface GameBoardProps {
  player: string;
  setPlayer: (value: string) => void;
}

const GameBoard: FunctionComponent<GameBoardProps> = ({
  player,
  setPlayer,
}) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const handleClick = (index: number) => {
    // Ignore clicks if the cell is already occupied or the game is over
    if (board[index] || winner) {
      return;
    }

    // Update the board with the current player's symbol
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    // Check for a winner
    const winningPlayer = calculateWinner(newBoard);
    if (winningPlayer) {
      setWinner(winningPlayer);
    } else {
      // Switch to the next player
      setPlayer(player === "X" ? "O" : "X");
      console.log("current player", player);
    }
  };

  const calculateWinner = (board: any) => {
    // Define winning combinations
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Check if any of the winning combinations are present
    for (let combination of winCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    // If there are no winning combinations, return null
    return null;
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  const renderCell = (index: any) => {
    const cellValue = board[index];
    // console.log({
    //   winner: winner,
    //   calculateWinner: calculateWinner(board),
    //   calculate: calculateWinner(board)?.includes(index),
    //   index: index,
    // });
    const isWinningCell =
      winner &&
      calculateWinner(board) &&
      calculateWinner(board).includes(index);

    return (
      <div
        key={index}
        className={`${classes.cell} ${
          isWinningCell ? classes.winning__cell : ""
        }`}
        onClick={() => handleClick(index)}
      >
        <span
          className={board[index] === "X" ? classes.player1 : classes.player2}
        >
          {cellValue}
        </span>
      </div>
    );
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className={classes.container}
      >
        <AnimatePresence>
          {winner && <UpdateModal winner={winner} />}
          {!winner && !board.includes(null) && <UpdateModal winner={"draw"} />}
        </AnimatePresence>
        <div className={classes.row}>
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </div>
        <div className={classes.row}>
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </div>
        <div className={classes.row}>
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </div>
      </motion.div>
      {
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={
            board.every((item: any) => item === null)
              ? { opacity: 0, scale: 0 }
              : { opacity: 1, scale: 1 }
          }
          exit={{ opacity: 0, scale: 0 }}
          type="submit"
          className={classes.reset__button}
          onClick={handleReset}
        >
          Reset
        </motion.button>
      }
    </>
  );
};

export default GameBoard;
