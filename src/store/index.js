import { configureStore } from "@reduxjs/toolkit";
import fightsSlice from "./fights-slice";
import rankingsSlice from "./rankings-slice";

const store = configureStore({
  reducer: {
    fights: fightsSlice.reducer,
    rankings: rankingsSlice.reducer,
  },
});

export default store;
