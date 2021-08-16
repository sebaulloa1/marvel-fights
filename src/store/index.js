import { configureStore } from "@reduxjs/toolkit";
import fightsSlice from "./fights-slice";

const store = configureStore({
  reducer: {
    fights: fightsSlice.reducer,
  },
});

export default store;
