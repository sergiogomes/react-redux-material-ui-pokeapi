import React from "react";
import { render } from "@testing-library/react";

import App from "./App";
import ReduxProvider from "./reduxProvider";

test("renders learn react link", () => {
  const { getByText } = render(
    <ReduxProvider>
      <App />
    </ReduxProvider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
