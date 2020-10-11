
import React from "react";
import { Link } from 'react-router-dom'
import { Typography, Button } from "@material-ui/core";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SaveIcon from '@material-ui/icons/Save';

const Home = () => {

  return (
    <div>
      <Typography color="secondary" variant="h1">
        Home
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SportsEsportsIcon />}
      >
        <Link to="/newgame">
          New Game
        </Link>
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Load Game
      </Button>
    </div>
  );
};

export default Home;
