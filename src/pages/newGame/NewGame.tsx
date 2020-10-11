
import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@material-ui/core";

import { getPokemon } from "../../core/axios/axios"
import { IPokemon } from "../../interfaces/IPokemon";
import PokemonCard from "../pokemons/PokemonCard";

import bulbasaurImg from "../../images/pokemons/bulbasaur.jpg";
import charmanderImg from "../../images/pokemons/charmander.jpg";
import squirtleImg from "../../images/pokemons/squirtle.jpg";

const NewGame = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  
  useEffect(() => {
    const fetchPokemons = async () => {
      const bulbasaur: IPokemon = await getPokemon(1);
      bulbasaur.desc = "Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker patches.";
      bulbasaur.image = bulbasaurImg;

      const charmander: IPokemon = await getPokemon(4);
      charmander.desc = "Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes.";
      charmander.image = charmanderImg;

      const squirtle: IPokemon = await getPokemon(7);
      squirtle.desc = "Squirtle is a small Pokémon that resembles a light blue turtle.";
      squirtle.image = squirtleImg;

      const newPokemons: IPokemon[] = [bulbasaur, charmander, squirtle];
      setPokemons(newPokemons);
    };
    fetchPokemons();
  }, []);
  
  return (
    <div>
      <Typography color="secondary" variant="h3">
        New Game
      </Typography>
      <p>To start the game pick your first pokemon from the three awesome and powerful below:</p>
      <Grid container spacing={3}>
        {pokemons && pokemons.map((pokemon: IPokemon) => (
          <Grid item sm={4} key={pokemon.id} >
            <PokemonCard pokemon={pokemon}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NewGame;