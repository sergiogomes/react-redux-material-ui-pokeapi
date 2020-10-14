import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Box } from '@material-ui/core';

import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './counterSlice';
import styles from './Counter.module.scss';

const Counter = (): JSX.Element => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <Box m={5} />
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
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
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

export default Counter;
