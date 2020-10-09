import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <Button
          variant="contained" 
          color="primary"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <span className={styles.value}>{count}</span>
        <Button
          variant="contained" 
          color="primary"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          variant="contained" 
          color="secondary"
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </Button>
        <Button
          variant="contained" 
          color="secondary"
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </Button>
      </div>
    </div>
  );
};
