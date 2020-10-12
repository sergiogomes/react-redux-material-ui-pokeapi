import { Url } from "url";

export interface IPokemon {
  id: number;
  name: string;
  desc: string; // not present in the pokeapi
  image: string; // not present in the pokeapi
  experience: number; // not present in the pokeapi
  health: number; // not present in the pokeapi
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  is_default: boolean;
  location_area_encounters: string;
  abilities: Array<ability>;
  forms: Array<nameUrl>;
  game_indices: Array<game_indice>;
  held_items: Array<any>;
  moves: Array<move>;
  species: nameUrl;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: Array<stat>;
  types: Array<type>;
};

type nameUrl = {
  name: string;
  url: string;
}

type ability = {
  ability: nameUrl;
  is_hidden: boolean;
  slot: number;
}

type game_indice = {
  game_index: number;
  version: nameUrl;
}

type move = {
  move: nameUrl;
  version_group_details: Array<version_group_detail>;
}

type version_group_detail = {
  level_learned_at: number;
  move_learn_method: nameUrl;
  version_group: nameUrl;
}

type stat = {
  base_stat: number;
  effort: number;
  stat: nameUrl;
}

type type = {
  slot: number;
  type: nameUrl;
}
