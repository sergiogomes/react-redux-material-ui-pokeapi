import { ITileData } from "../../interfaces/ITileData";

import arenaImg from "../../images/actions/arena.jpeg";
import backpackImg from "../../images/actions/backpack.jpeg";
import eggsImg from "../../images/actions/eggs.jpg";
import fieldsImg from "../../images/actions/fields.jpg";
import pokeCenterImg from "../../images/actions/pokeCenter.png";
import pokedexImg from "../../images/actions/pokedex.png";
import storeImg from "../../images/actions/store.png";

export const initialTileData: Array<ITileData> = [
  { id: 1, img: pokedexImg, title: "My Pokemons", subtitle: "My pokemons", page: "/mypokemons", cols: 2 },
  { id: 2, img: pokeCenterImg, title: "Poke Center", subtitle: "Heal your pokemons", page: "/helthcenter", cols: 1 },
  { id: 3, img: storeImg, title: "Store", subtitle: "Buy and sell items", page: "/store", cols: 1 },
  { id: 4, img: backpackImg, title: "Backpack", subtitle: "My items", page: "/bag", cols: 1 },
  { id: 5, img: fieldsImg, title: "Field", subtitle: "Open field", page: "/field", cols: 1 },
  { id: 6, img: eggsImg, title: "Breeders", subtitle: "Pokemon breeders", page: "/breeders", cols: 1 },
  { id: 7, img: arenaImg, title: "Arena", subtitle: "Battle and gain experience", page: "/arena", cols: 2 }
];
