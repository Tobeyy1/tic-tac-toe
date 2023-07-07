"use client";

import GameBoard from "./components/GameBoard/GameBoard";
import Setup from "./components/Setup/Setup";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import classes from "./page.module.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [player, setPlayer] = useState<string>("X");
  const [theme, setTheme] = useState<string>("light");
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");
  const [showSetup, setShowSetup] = useState<boolean>(true);

  return (
    <main
      className={theme === "light" ? classes.main__light : classes.main__dark}
    >
      {showSetup && (
        <Setup
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setShowSetup={setShowSetup}
        />
      )}
      <header>
        <h1>Tic Tac Toe</h1>
        <div>
          <ThemeToggler theme={theme} setTheme={setTheme} />
        </div>
      </header>
      <div className={classes.ui}>
        {/* Shows whose turn it currently is  */}
        <AnimatePresence mode="wait">
          {player === "X" && (
            <motion.div
              key={"player1"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              id={classes.player1}
              className={classes.player}
            >
              {player1}&apos;s Turn
            </motion.div>
          )}
          {player === "O" && (
            <motion.div
              key={"player2"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              id={classes.player2}
              className={classes.player}
            >
              {player2}&apos;s Turn
            </motion.div>
          )}
        </AnimatePresence>
        <GameBoard player={player} setPlayer={setPlayer} />
      </div>
    </main>
  );
}
