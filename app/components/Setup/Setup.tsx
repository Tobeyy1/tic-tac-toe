"use client";

import {
  FormEventHandler,
  FunctionComponent,
  MouseEventHandler,
  useRef,
} from "react";
import classes from "./Setup.module.scss";

interface SetupProps {
  setPlayer1: (value: string) => void;
  setPlayer2: (value: string) => void;
  setShowSetup: (value: boolean) => void;
}

const Setup: FunctionComponent<SetupProps> = ({
  setPlayer1,
  setPlayer2,
  setShowSetup,
}) => {
  const playerOneRef = useRef<HTMLInputElement>(null);
  const playerTwoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (playerOneRef.current && playerTwoRef.current) {
      setPlayer1(playerOneRef.current.value);
      setPlayer2(playerTwoRef.current.value);
      setShowSetup(false);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.modal}>
        <header className={classes.header}>Setup</header>
        <form>
          <label htmlFor="player1" className={classes.label}>
            <input
              type="text"
              className={classes.input}
              title="player1"
              placeholder="Player1"
              ref={playerOneRef}
            />
          </label>
          <label htmlFor="player2" className={classes.label}>
            <input
              type="text"
              className={classes.input}
              title="player2"
              placeholder="Player2"
              ref={playerTwoRef}
            />
          </label>
          <button className={classes.cta} onClick={submitHandler}>
            Launch Game 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setup;
