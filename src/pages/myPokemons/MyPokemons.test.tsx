import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom'

import MyPokemons from "./MyPokemons";
import ReduxProvider from "../../reduxProvider";

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <ReduxProvider>
      <Router>
        <MyPokemons />
      </Router>
    </ReduxProvider>
  );
});

it("should contain the title my pokemons", () => {
  const title = "My Pokemons";
  expect(wrapped.render().text()).toContain(title);
});
