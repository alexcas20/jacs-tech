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
      const existingItem = state.items.find((item) => item.id === action.payload.id);
        if(existingItem){
            existingItem.quantity += 1;
            console.log("ya estaba en el carrito")
        } else {
            state.items.push({...action.payload, quantity:1});
        }
        state.totalAmount += action.payload.price;
        console.log(state.items)
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
