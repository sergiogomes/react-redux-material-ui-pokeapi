import React from "react";
import { render } from "@testing-library/react";

import ReduxProvider from "../../../reduxProvider";
import Header from "./Header";

test("renders learn react link", () => {
  const { getByText } = render(
    <ReduxProvider>
      <Header />
    </ReduxProvider>
  );

  expect(getByText(/Poke API/i)).toBeInTheDocument();
});
