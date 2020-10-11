import axios from 'axios';

import { IPokemon } from "../../interfaces/IPokemon"

export const getPokemon = (id: number) => {
  return axios.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => {
      return response.data;
    });
};
