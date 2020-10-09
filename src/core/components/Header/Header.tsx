import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
  }),
);

const Header = () => {
  const [darkState, setDarkState] = useState(true);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkState(event.target.checked);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.grow}>
          Poke API
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={darkState} onChange={handleChange} aria-label="Theme switch" />}
            label={darkState ? 'Dark Theme' : 'Light Theme'}
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
}
export default Header;