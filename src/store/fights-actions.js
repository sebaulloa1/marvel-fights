import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendFightsData = createAsyncThunk(
  "fights/sendFightsData",
  async (fights) => {
    const response = await fetch(
      "https://react-http-ab801-default-rtdb.firebaseio.com/fights.json",
      { method: "POST", body: JSON.stringify(fights) }
    );
    if (!response.ok) {
      throw new Error();
    }
  }
);
