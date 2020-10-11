import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { 
  createStyles, 
  GridList, 
  GridListTile, 
  GridListTileBar, 
  makeStyles,
  Typography
} from "@material-ui/core";

import { ITileData } from "../../interfaces/ITileData";

import arenaImg from "../../images/actions/arena.jpeg";
import backpackImg from "../../images/actions/backpack.jpeg";
import eggsImg from "../../images/actions/eggs.jpg";
import fieldsImg from "../../images/actions/fields.jpg";
import pokeCenterImg from "../../images/actions/pokeCenter.png";
import pokedexImg from "../../images/actions/pokedex.png";
import storeImg from "../../images/actions/store.png";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    title: {
      textAlign: 'center',
      margin: 30
    },
    gridList: {
      width: 730,
    },
    gridItem: {
      cursor: 'pointer'
    }
  }),
);

const initialTileData: Array<ITileData> = [
  { id: 1, img: pokedexImg, title: "My Pokemons", subtitle: "My pokemons", page: "/mypokemons", cols: 2 },
  { id: 2, img: pokeCenterImg, title: "Poke Center", subtitle: "Heal your pokemons", page: "/helthcenter", cols: 1 },
  { id: 3, img: storeImg, title: "Store", subtitle: "Buy and sell items", page: "/store", cols: 1 },
  { id: 4, img: backpackImg, title: "Backpack", subtitle: "My items", page: "/bag", cols: 1 },
  { id: 5, img: fieldsImg, title: "Field", subtitle: "Open field", page: "/field", cols: 1 },
  { id: 6, img: eggsImg, title: "Breeders", subtitle: "Pokemon breeders", page: "/breeders", cols: 1 },
  { id: 7, img: arenaImg, title: "Arena", subtitle: "Battle and gain experience", page: "/arena", cols: 2 }
];

const Actions = () => {
  const [tileData] = useState<Array<ITileData>>(initialTileData);
  const [redirect, setRedirect] = useState<string>("");
  const classes = useStyles();

  const handleClick = (page: string): void => {
    setRedirect(page);
  };

  if (redirect) {
    return <Redirect to={redirect} />
  } else {

    return (
      <div>
        <Typography
          color="secondary"
          variant="h5"
          className={classes.title}
        >
          What are you going to do next?
        </Typography>
        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {tileData.map((tile) => (
              <GridListTile
                key={tile.id}
                cols={tile.cols}
                className={classes.gridItem}
                onClick={() => handleClick(tile.page)}
              >
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={tile.subtitle}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
};

export default Actions;
