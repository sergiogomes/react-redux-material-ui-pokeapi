import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "../pages/counter/counterSlice";
import headerReducer from "../core/components/header/headerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
