import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { 
  createStyles, 
  Typography,
  IconButton,
  makeStyles,
  FormGroup,
  Toolbar,
  Switch,
  AppBar,
  Grid
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

import { setDark, setLight, selectDarkState } from "./headerSlice";

const useStyles = makeStyles(() =>
  createStyles({
    grow: { flexGrow: 1 },
  })
);

const Header = () => {
  const darkState = useSelector(selectDarkState);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.checked) {
      case true:
        dispatch(setDark());
        break;
      case false:
        dispatch(setLight());
        break;
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.grow}>
          <Link to="/">
              Poke API
          </Link>
        </Typography>
        <FormGroup>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item><WbSunnyIcon /></Grid>
              <Grid item>
                <Switch
                  checked={darkState}
                  onChange={handleChange}
                  name="theme"
                  aria-label={`Theme switched to ${darkState ? "dark" : "light"}` } />
              </Grid>
              <Grid item><NightsStayIcon /></Grid>
            </Grid>
          </Typography>
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
}
export default Header;