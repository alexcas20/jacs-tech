import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        console.log("ya estaba en el carrito");
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount += action.payload.price;
    },
    restCant: (state, action) => {
      const selectedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (selectedItem) {
        if (selectedItem.quantity > 1) {
          selectedItem.quantity -= 1;
        } else {
          console.log("elemento eliminado");
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
        state.totalAmount -= action.payload.price;
      }
    },
    addCant: (state, action) => {
      const selectedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (selectedItem) {
        if (selectedItem.quantity < selectedItem.stock) {
          selectedItem.quantity += 1;
          state.totalAmount += action.payload.price;
        } else {
          alert("maximo stock");
        }
      }
    },
  },
});

export const { addItem, restCant, addCant } = cartSlice.actions;
export default cartSlice.reducer;
