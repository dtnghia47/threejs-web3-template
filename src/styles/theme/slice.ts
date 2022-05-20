import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { gettheme } from './API';
import { initialThemes } from "./consts";

const initialState: any = {
  branding: initialThemes,
};

export const getTheme = createAsyncThunk(
  'Theme/fetchtheme',
  async (params: any) => {
    const response = await gettheme();
    return response;
  }
);

export const ThemeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    actionDemo: (state) => {
      state.branding = {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTheme.pending, (state) => {
      })
      .addCase(getTheme.fulfilled, (state, action) => {
        state.branding = {
          ...state.branding,
          brandingColors: action.payload,
        }
      })
      .addCase(getTheme.rejected, (state, action) => {
      });
  },
});

export const { actionDemo } = ThemeSlice.actions;

export default ThemeSlice.reducer;
