import { IPokemon } from "../../interfaces/IPokemon";
import { IPokemonGrid } from "../../interfaces/IPokemonGrid";

export const mapInterfaces = (pokemon: IPokemon): IPokemonGrid => {
  const pokegrid: IPokemonGrid = {
    id: pokemon.id,
    name: pokemon.name,
    experience: pokemon.base_experience,
    image: pokemon.sprites.front_default,
    health: 0,
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  }

  for (const pokeStat of pokemon.stats) {
    switch (pokeStat.stat.name) {
      case "hp":
        pokegrid.hp = pokeStat.base_stat;
        pokegrid.health = pokeStat.base_stat;
        break
      case "attack":
        pokegrid.attack = pokeStat.base_stat;
        break
      case "defense":
        pokegrid.defense = pokeStat.base_stat;
        break
      case "special-attack":
        pokegrid.specialAttack = pokeStat.base_stat;
        break
      case "special-defense":
        pokegrid.specialDefense = pokeStat.base_stat;
        break
      case "speed":
        pokegrid.speed = pokeStat.base_stat;
      break
    }
  }
  
  return pokegrid;
}