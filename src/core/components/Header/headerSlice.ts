import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

interface HeaderState {
  darkState: boolean;
}

const initialState: HeaderState = {
  darkState: true,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setDark: (state) => {
      state.darkState = true;
    },
    setLight: (state) => {
      state.darkState = false;
    },
  },
});

export const { setDark, setLight } = headerSlice.actions;

export const selectDarkState = (state: RootState): boolean => state.header.darkState;

export default headerSlice.reducer;
