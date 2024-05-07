import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  deleteCart,
  fetchCartApi,
  updateCart,
} from "../../services/apiIngredients";

/////////////////// cartSlice Helper Function /////////////////////////////////////////////////

function getStructureIngredient(ing) {
  /* 
 this function destructure ingredients
 { name, price, id, quantity: 1, totalPrice: 1 }, 
 */
  let {
    quantity,
    ingredient: { name, price, _id },
  } = ing;

  return {
    name,
    price,
    quantity,
    id: _id,
    totalPrice: quantity * price,
  };
}

async function performOperation(dispatch, data, type) {
  /* 
 this is a unique function for Increase and Decrease Ingredients
 */
  dispatch({ type: "cart/loading" });
  const id = await updateCart(data);
  if (id) dispatch({ type: `cart/${type}`, payload: id });
}

const initialState = {
  ingredients: [],
  isLoading: false,
  error: "",
};

export const fetchCart = createAsyncThunk("cart/fetchCart", async function () {
  const data = await fetchCartApi();

  return data.carts;
});

// cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addIngredient(state, action) {
      state.ingredients.push(action.payload);
      state.isLoading = false;
      state.error = "";
      // console.log(state.ingredients);
    },
    deleteIngredient(state, action) {
      state.ingredients = state.ingredients.filter(
        (ing) => ing.id !== action.payload,
      );
      state.isLoading = false;
    },
    increaseIngredient(state, action) {
      const ingredient = state.ingredients.find(
        (ing) => ing.id === action.payload,
      );
      ingredient.quantity++;
      ingredient.totalPrice = ingredient.quantity * ingredient.price;
      state.isLoading = false;
    },
    decreaseIngredient(state, action) {
      const ingredient = state.ingredients.find(
        (ing) => ing.id === action.payload,
      );
      ingredient.quantity--;
      ingredient.totalPrice = ingredient.quantity * ingredient.price;
      state.isLoading = false;
      if (ingredient.quantity <= 0)
        cartSlice.caseReducers.delete(state, action);
    },
    clearCart(state) {
      state.ingredients = [];
      state.isLoading = false;
    },
    loading(state) {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCart.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload.map((ing) =>
          getStructureIngredient(ing),
        );
        console.log(state.ingredients);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "There was a problem getting your cart.";
      }),
});

// thunk middleware async function
export function addIngredient(id = "", quantity) {
  return async function (dispatch, getState) {
    dispatch({ type: "cart/loading" });

    const cart = await addToCart({ id, quantity });

    dispatch({
      type: "cart/addIngredient",
      payload: getStructureIngredient(cart),
    });
  };
}

export function increaseIngredient(id = "", quantity) {
  return async function (dispatch, getState) {
    await performOperation(dispatch, { id, quantity }, "increaseIngredient");
  };
}

export function decreaseIngredient(id = "", quantity) {
  return async function (dispatch, getState) {
    await performOperation(dispatch, { id, quantity }, "decreaseIngredient");
  };
}

export function deleteIngredient(id = "") {
  return async function (dispatch, getState) {
    dispatch({ type: "cart/loading" });
    const data = await deleteCart(id);
    if (data) dispatch({ type: `cart/deleteIngredient`, payload: data });
  };
}

export function clearCart() {
  return async function (dispatch, getState) {
    dispatch({ type: "cart/loading" });
    const data = await deleteCart();
    console.log(data);
    if (data) dispatch({ type: `cart/clearCart`, payload: data });
  };
}

export const getCart = (state) => state.cart;
export const getLength = (state) => state.cart.ingredients.length;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.ingredients.find((ing) => ing.id === id)?.quantity ?? 0;

// actions

// reducer
export default cartSlice.reducer;
