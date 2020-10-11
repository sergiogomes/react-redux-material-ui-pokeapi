
import React from "react";
import { Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, makeStyles } from "@material-ui/core";

import { IPokemon } from "../../interfaces/IPokemon";

type CardProps = {
  pokemon: IPokemon
};

const useStyles = makeStyles({
  root: { maxWidth: 400 },
  media: { height: 250 },
  text: { height: 45 },
});

const PokemonCard = ({pokemon}: CardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pokemon.image}
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name}
          </Typography>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <Typography
            className={classes.text}
            variant="body2"
            color="textSecondary"
            component="p">
            {pokemon.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Choose
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
