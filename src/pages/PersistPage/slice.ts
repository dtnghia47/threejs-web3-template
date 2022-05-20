import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import { RootState } from '../../app/store';
import { getData } from './API';
import { initState } from "./types";

const persistConfig = {
  key: 'react-client-template',
  version: 1,
  storage,
  whitelist: ['dataStorage'],
  blacklist: ['dataWithoutStorage'],
  // stateReconciler,
  // debug,
}

const initialState: initState = {
  dataWithoutStorage: ['dont save'],
  dataStorage: ['saved'],
};

export const getDataPersist = createAsyncThunk(
  'Persist/fetchdata',
  async () => {
    const response = await getData();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const PersistSlice = createSlice({
  name: 'Persist',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataPersist.pending, (state) => {
      })
      .addCase(getDataPersist.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.dataStorage = [...action.payload];
        }
      })
      .addCase(getDataPersist.rejected, (state, action) => {
      });
  },
});

// export const { } = PersistSlice.actions;

export const selectData = (state: RootState) => state.persist.dataStorage;

const persistedReducer = persistReducer(persistConfig, PersistSlice.reducer)

export default persistedReducer;
