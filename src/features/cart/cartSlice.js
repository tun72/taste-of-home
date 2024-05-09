import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  deleteCart,
  fetchCartApi,
  updateCart,
} from "../../services/apiIngredients";
import toast from "react-hot-toast";

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
  try {
    dispatch({ type: "cart/loading" });
    const id = await updateCart(data);
    if (id) dispatch({ type: `cart/${type}`, payload: id });
  } catch (e) {
    dispatch({ type: "cart/error", payload: e.message });
    toast.error(e.message);
  }
}
/////////////////////////////////////////////////////////////////////////////////////

// initial state
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
        cartSlice.caseReducers.deleteIngredient(state, action);
    },
    clearCart(state) {
      state.ingredients = [];
      state.isLoading = false;
    },
    loading(state) {
      state.isLoading = true;
    },
    error(state, action) {
      state.isLoading = false;
      state.error = action.payload;
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

// thunk middleware async functions
export function addIngredient(id = "", quantity) {
  return async function (dispatch, getState) {
    dispatch({ type: "cart/loading" });
    try {
      const cart = await addToCart({ id, quantity });
      dispatch({
        type: "cart/addIngredient",
        payload: getStructureIngredient(cart),
      });
    } catch (e) {
      dispatch({ type: "cart/error", payload: e.message });
      toast.error(e.message);
    }
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
    try {
      const data = await deleteCart(id);
      if (data) dispatch({ type: `cart/deleteIngredient`, payload: data });
    } catch (e) {
      dispatch({ type: "cart/error", payload: e.message });
      toast.error(e.message);
    }
  };
}

export function clearCart() {
  return async function (dispatch, getState) {
    dispatch({ type: "cart/loading" });
    try {
      const data = await deleteCart();
      if (data) dispatch({ type: `cart/clearCart`, payload: data });
    } catch (e) {
      dispatch({ type: "cart/error", payload: e.message });
      toast.error(e.message);
    }
  };
}

// useful helper functions
export const getCart = (state) => state.cart;
export const getLength = (state) => state.cart.ingredients.length;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.ingredients.find((ing) => ing.id === id)?.quantity ?? 0;

// reducer
export default cartSlice.reducer;
