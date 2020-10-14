import React from 'react';
import { Backdrop, CircularProgress, createStyles, makeStyles, Typography } from '@material-ui/core';

import { selectLoadingState } from './loadingSlice';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() =>
  createStyles({
    backdrop: { zIndex: 1 },
    progress: { marginLeft: 20 },
  }),
);

const Loading = (): JSX.Element => {
  const loadingState = useSelector(selectLoadingState);
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={loadingState}>
      <CircularProgress color="secondary" />
      <Typography className={classes.progress} color="secondary" variant="h5" component="h2">
        Wait just a moment...
      </Typography>
    </Backdrop>
  );
};

export default Loading;
