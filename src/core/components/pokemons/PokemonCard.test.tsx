import React from "react";
import { mount, ReactWrapper } from "enzyme";

import PokemonCard from "./PokemonCard";
import ReduxProvider from "../../../reduxProvider";
import { IPokemon } from "../../../interfaces/IPokemon";
import { getPokemon } from "../../axios/axios";
import { capitalizeFirstLetter } from "../util/capitalizeFirstLetter";

let wrapped: ReactWrapper;
let caterpie: IPokemon;

beforeAll(async () => {
  caterpie = await getPokemon(10);
  caterpie.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  caterpie.desc = "Caterpie is a Pokémon that resembles a green caterpillar with a yellow underside and teardrop-shaped tail."
});

beforeEach(() => {
  wrapped = mount(
    <ReduxProvider>
      <PokemonCard pokemon={caterpie}/>
    </ReduxProvider>
  );
});

it("should render one image", () => {
  expect(wrapped.find("img").length).toEqual(1);
});

it("should contain caterpie name", () => {
  const title = capitalizeFirstLetter(caterpie.name);
  expect(wrapped.render().text()).toContain(title);
});

it("should render two buttons", () => {
  expect(wrapped.find("button").length).toEqual(2);
});
