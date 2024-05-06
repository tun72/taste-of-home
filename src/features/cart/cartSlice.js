import { createSlice } from "@reduxjs/toolkit";

// { name, price, id, quantity: 1, totalPrice: 1 },

const initialState = {
  ingredients: [],
};

// cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addIngredient(state, action) {
      state.ingredients.push(action.payload);
    },
    deleteIngredient(state, action) {
      state.ingredients = state.ingredients.filter(
        (ing) => ing.id !== action.payload,
      );
    },
    increaseIngredient(state, action) {
      const ingredient = state.ingredients.find(
        (ing) => ing.id === action.payload,
      );
      ingredient.quantity++;
      ingredient.totalPrice = ingredient.quantity * ingredient.unitPrice;
    },
    decreaseIngredient(state, action) {
      const ingredient = state.ingredients.find(
        (ing) => ing.id === action.payload,
      );
      ingredient.quantity--;
      ingredient.totalPrice = ingredient.quantity * ingredient.unitPrice;

      if (ingredient.quantity <= 0)
        cartSlice.caseReducers.delete(state, action);
    },
    clearCart(state) {
      state.ingredients = [];
    },
  },
});

// actions
export const {
  addIngredient,
  deleteIngredient,
  increaseIngredient,
  decreaseIngredient,
  clearCart,
} = cartSlice.actions;

// reducer
export default cartSlice.reducer;

export const getCart = (state) => state.cart.ingredients;
