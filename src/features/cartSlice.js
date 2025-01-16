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
      console.log(action.payload);

      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;

        console.log("ya estaba en el carrito");
      } else {
        state.items.push(action.payload);
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );

      console.log(state.totalAmount);
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
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
  },
});

export const { addItem, restCant, addCant, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
