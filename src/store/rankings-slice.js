import { createSlice } from "@reduxjs/toolkit";
import { updateRankings } from "./rankings-actions";

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
  },
});

export default rankingsSlice;
