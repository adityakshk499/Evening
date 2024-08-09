import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlistSlice",
  initialState: [],
  reducers: {
    handleAddCoins(state, actions) {
      const newState = [...state];
      newState.push(actions.payload);

      return newState;
    },
    handleRemoveCoins(state, actions) {
      console.log(state, actions);
    },
  },
});

export const { handleAddCoins, handleRemoveCoins } = watchlistSlice.actions;
export default watchlistSlice.reducer;
