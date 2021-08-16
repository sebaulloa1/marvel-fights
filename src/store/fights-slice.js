import { createSlice } from "@reduxjs/toolkit";

const fightsSlice = createSlice({
  name: "fights",
  initialState: {
    totalFights: 0,
    fights: [],
    date: null,
  },
  reducers: {
    addFight(state, action) {
      state.totalFights = action.payload.numberOfFights;
      state.fights = action.payload.fights;
      state.date = action.payload.date;
    },
    clearFights(state) {
      state.totalFights = 0;
      state.fights = [];
      state.date = null;
    },
  },
});

export const fightsActions = fightsSlice.actions;

export default fightsSlice;
