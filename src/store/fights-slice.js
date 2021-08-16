import { createSlice } from "@reduxjs/toolkit";

const fightsSlice = createSlice({
  name: "fights",
  initialState: {
    totalFights: 0,
    fights: [],
  },
  reducers: {
    addFight(state, action) {
      state.totalFights = action.payload.numberOfFights;
      state.fights = action.payload.fights;
    },
  },
});

export const fightsActions = fightsSlice.actions;

export default fightsSlice;
