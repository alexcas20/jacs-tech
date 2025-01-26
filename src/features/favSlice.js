import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favItems: [],
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav: (state, action) => {
      console.log(action.payload);

      const existingItem = state.favItems.find(
        (item) => item.id === action.payload.id
      );

      console.log(state.favItems);

      existingItem
        ? (state.favItems = state.favItems.filter(
            (item) => item.id !== action.payload.id
          ))
        : state.favItems.push(action.payload);
    },

    deleteFav: (state, action) => {
      console.log(action.payload);
      state.favItems = state.favItems.filter(
        (item) => item.id != action.payload
      );
    },
  },
});

export const { addFav, deleteFav } = favSlice.actions;
export default favSlice.reducer;
