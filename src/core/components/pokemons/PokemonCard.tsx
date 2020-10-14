import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
} from '@material-ui/core';

import { IPokemon } from '../../../interfaces/IPokemon';
import { capitalizeFirstLetter } from '../util/capitalizeFirstLetter';

type CardProps = {
  pokemon: IPokemon;
  startGame: (pokemonId: number) => void;
};

const useStyles = makeStyles({
  root: { maxWidth: 400 },
  media: { height: 250 },
  text: { height: 45 },
});

const PokemonCard = ({ pokemon, startGame }: CardProps): JSX.Element => {
  const classes = useStyles();

  const handleChoose = (pokemonId: number): void => {
    startGame(pokemonId);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={pokemon.image} title={pokemon.name} />
        <CardContent>
          <Typography gutterBottom color="primary" variant="h5" component="h2">
            {capitalizeFirstLetter(pokemon.name)}
          </Typography>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {pokemon.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => handleChoose(pokemon.id)} variant="contained" color="primary" size="small" fullWidth>
          {`Choose ${capitalizeFirstLetter(pokemon.name)}`}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
