import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  items: [],
};

// Create a cart slice
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
    },
    removeItem: (state, action) => {
      const itemidToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemidToRemove);
    },
    updateItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } =
  CartSlice.actions;

export default CartSlice.reducer;
