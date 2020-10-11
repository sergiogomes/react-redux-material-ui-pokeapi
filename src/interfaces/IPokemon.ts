import { Url } from "url";

export interface IPokemon {
  id: number;
  name: string;
  desc: string;
  image: string;
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  is_default: boolean;
  location_area_encounters: Url;
  abilities: Array<any>;
  forms: Array<any>;
  game_indices: Array<any>;
  held_items: Array<any>;
  moves: Array<any>;
  species: any;
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
  stats: Array<any>;
  types: Array<any>;
};