import React from "react";
import { mount, ReactWrapper } from "enzyme";

import App from "./App";
import ReduxProvider from "./reduxProvider";

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <ReduxProvider>
      <App />
    </ReduxProvider>
  );
});

it("should render App whithout crashing", () => {
  expect(wrapped.find(".App").length).toEqual(1);
});
