import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { IPokemonGrid } from '../../interfaces/IPokemonGrid';

interface MyPokemonsState {
  myPokemonsState: IPokemonGrid[];
}

const initialState: MyPokemonsState = {
  myPokemonsState: [],
};

export const myPokemonsSlice = createSlice({
  name: 'myPokemons',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const pokeFound = state.myPokemonsState.find((poke) => poke.id === action.payload.id);
      if (!pokeFound) {
        state.myPokemonsState.push(action.payload);
      }
    },
  },
});

export const { addPokemon } = myPokemonsSlice.actions;

export const selectMyPokemonsState = (state: RootState): IPokemonGrid[] => state.myPokemons.myPokemonsState;

export default myPokemonsSlice.reducer;
