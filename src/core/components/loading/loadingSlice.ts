import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

interface LoadingState {
  loadingOpened: boolean;
}

const initialState: LoadingState = {
  loadingOpened: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loadingOpened = true;
    },
    hideLoading: (state) => {
      state.loadingOpened = false;
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;

export const selectLoadingState = (state: RootState): boolean => state.loading.loadingOpened;

export default loadingSlice.reducer;
