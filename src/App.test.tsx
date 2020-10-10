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

it("renders one image", () => {
  expect(wrapped.find("img").length).toEqual(1);
});
