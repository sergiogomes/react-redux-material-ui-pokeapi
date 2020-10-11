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
import bulbasaurImg from "../../images/pokemons/bulbasaur.jpg";

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
      width: 500,
      height: 490,
    },
    gridItem: {
      cursor: 'pointer'
    }
  }),
);

const initialTileData: Array<ITileData> = [
  { id: 1, img: bulbasaurImg, title: "Helth Center", subtitle: "Helth Center", page: "page", cols: 2 },
  { id: 2, img: bulbasaurImg, title: "My Pokemons", subtitle: "My Pokemons", page: "page", cols: 1 },
  { id: 3, img: bulbasaurImg, title: "My Pokemons", subtitle: "My Pokemons", page: "page", cols: 1 },
  { id: 4, img: bulbasaurImg, title: "My Pokemons", subtitle: "My Pokemons", page: "page", cols: 1 },
  { id: 5, img: bulbasaurImg, title: "My Pokemons", subtitle: "My Pokemons", page: "page", cols: 1 },
  { id: 6, img: bulbasaurImg, title: "Breeders", subtitle: "Breeders", page: "page", cols: 1 },
  { id: 7, img: bulbasaurImg, title: "Arena", subtitle: "Arena", page: "page", cols: 2 }
];

const Actions = () => {
  const [tileData] = useState<Array<ITileData>>(initialTileData);
  const [redirect, setRedirect] = useState<string>("");
  const classes = useStyles();

  const handleClick = (page: string): void => {
    setRedirect(`/${page}`);
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
