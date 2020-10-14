import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStyles, GridList, GridListTile, GridListTileBar, makeStyles, Typography } from '@material-ui/core';

import { showLoading, hideLoading } from '../../core/components/loading/loadingSlice';
import { addPokemon, selectMyPokemonsState } from '../myPokemons/myPokemonSlice';
import { getPokemon } from '../../core/axios/axios';

import { initialTileData } from './TileData';
import { mapInterfaces } from './mapInterfaces';
import { ITileData } from '../../interfaces/ITileData';
import { IPokemon } from '../../interfaces/IPokemon';
import { IPokemonGrid } from '../../interfaces/IPokemonGrid';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    title: { textAlign: 'center', margin: 30 },
    gridList: { width: 730 },
    gridItem: { cursor: 'pointer' },
  }),
);

const Actions = (): JSX.Element => {
  const [tileData] = useState<ITileData[]>(initialTileData);
  const [redirect, setRedirect] = useState<string>('');
  const pokeRows = useSelector(selectMyPokemonsState);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async (arr: Array<{ id: number }>) => {
      dispatch(showLoading());
      for (const poke of arr) {
        const pokemon: IPokemon = await getPokemon(poke.id);
        const pokegrid: IPokemonGrid = mapInterfaces(pokemon);
        dispatch(addPokemon(pokegrid));
      }
      dispatch(hideLoading());
    };

    const memoryStr: string = window.localStorage.getItem('Memory Card') || '';
    if (memoryStr && pokeRows.length === 0) {
      const memoryCard = JSON.parse(memoryStr);
      fetchPokemons(memoryCard.pokemonList);
    } else {
      if (pokeRows.length > 0) return;
      setRedirect('/newgame');
    }
  }, [pokeRows, dispatch]);

  const handleClick = (page: string): void => {
    setRedirect(page);
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  } else {
    return (
      <div>
        <Typography color="secondary" variant="h5" className={classes.title}>
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
                <GridListTileBar title={tile.title} subtitle={tile.subtitle} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
};

export default Actions;
