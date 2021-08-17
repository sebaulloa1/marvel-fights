import { createSlice } from "@reduxjs/toolkit";
import { fetchTableData, updateRankings } from "./rankings-actions";

const rankingsSlice = createSlice({
  name: "rankings",
  initialState: {
    rankings: [],
  },
  reducers: {},
  extraReducers: {
    [updateRankings.fulfilled]: (state, action) => {
      state.rankings = action.payload;
    },
    [fetchTableData.fulfilled]: (state, action) => {
      state.rankings = action.payload;
    },
  },
});

export default rankingsSlice;
