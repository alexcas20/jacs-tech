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

      existingItem
        ? alert("It's already in favs")
        : state.favItems.push(action.payload);
    },

    deleteFav: (state, action) => {
      const existingItem = state.favItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const favsFilter = state.favItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.favItems.push(favsFilter);
      } else alert("Error, id not found");
    },
  },
});

export const { addFav, deleteFav } = favSlice.actions;
export default favSlice.reducer;
