import { createSlice } from "@reduxjs/toolkit";
import { fetchTableData, updateRankings } from "./rankings-actions";

const rankingsSlice = createSlice({
  name: "rankings",
  initialState: {
    rankings: [],
    hasChanged: false,
  },
  reducers: {
    updateFlag(state) {
      state.hasChanged = true;
    },
    clearRankings(state) {
      state.rankings = [];
      state.hasChanged = false;
    },
  },
  extraReducers: {
    [updateRankings.fulfilled]: (state, action) => {
      state.rankings = action.payload;
    },
    [fetchTableData.fulfilled]: (state, action) => {
      state.rankings = action.payload;
    },
  },
});

export const rankingsActions = rankingsSlice.actions;

export default rankingsSlice;
