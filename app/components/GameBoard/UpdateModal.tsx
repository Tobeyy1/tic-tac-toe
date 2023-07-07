import { FunctionComponent } from "react";
import classes from "./UpdateModal.module.scss";
import { FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";

interface UpdateModalProps {
  winner: string;
}

const UpdateModal: FunctionComponent<UpdateModalProps> = ({ winner }) => {
  return (
    <div className={classes.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.backdrop}
      ></motion.div>
      {winner === "X" && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className={classes.modal}
        >
          <FaCrown />
          Player One Wins!!
        </motion.div>
      )}
      {winner === "O" && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className={classes.modal}
        >
          <FaCrown />
          Player Two Wins!!
        </motion.div>
      )}
      {winner === "draw" && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className={classes.modal}
        >
          <FaCrown />
          It&apos;s a draw!!
        </motion.div>
      )}
    </div>
  );
};

export default UpdateModal;
