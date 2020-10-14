import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

import { columns } from './columns';
import { selectMyPokemonsState } from './myPokemonSlice';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const MyPokemons = (): JSX.Element => {
  const pokeRows = useSelector(selectMyPokemonsState);

  return (
    <div>
      <Typography color="secondary" variant="h5">
        My Pokemons
      </Typography>
      <Button variant="contained" color="primary" size="large" startIcon={<ArrowBackIcon />}>
        <Link to="/actions">Back</Link>
      </Button>

      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={pokeRows} columns={columns} pageSize={8} />
      </div>
    </div>
  );
};

export default MyPokemons;
