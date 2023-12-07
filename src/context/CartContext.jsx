import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();
const initialCart = {
  ingredients: localStorage.getItem("ingredients")
    ? JSON.parse(localStorage.getItem("ingredients"))
    : [],
};
let newIngrdient;
function reducer(state, action) {
  switch (action.type) {
    case "cart/add":
      const item = [...state.ingredients, action.payload];
      return { ingredients: item };
    case "cart/increase":
      newIngrdient = state.ingredients.map((ing) =>
        ing.id === action.payload
          ? {
              ...ing,
              quantity: ing.quantity + 1,
              totalPrice: (ing.quantity + 1) * ing.price,
            }
          : { ...ing },
      );
      return { ingredients: newIngrdient };

    case "cart/decrease":
      newIngrdient = state.ingredients
        .map((ing) =>
          ing.id === action.payload
            ? {
                ...ing,
                quantity: ing.quantity - 1,
                totalPrice: (ing.quantity - 1) * ing.price,
              }
            : { ...ing },
        )
        .filter((ing) => ing.quantity > 0);

      return { ingredients: newIngrdient };
    case "cart/delete":
      const ingredients = state.ingredients.filter(
        (ing) => ing.id !== action.payload,
      );
      return { ingredients };
    case "cart/clear":
      return { ingredients: [] };

    default:
      return new Error("Something Wrong");
  }
}

function CartProvider({ children }) {
  const [{ ingredients }, dispatch] = useReducer(reducer, initialCart);

  useEffect(
    function () {
      if (ingredients.length === 0) return;
      localStorage.setItem("ingredients", JSON.stringify(ingredients));
    },
    [ingredients],
  );

  function getCurrentById(id) {
    return ingredients.find((ing) => ing.id === id)?.quantity ?? 0;
  }

  return (
    <CartContext.Provider value={{ ingredients, dispatch, getCurrentById }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const content = useContext(CartContext);
  // console.log(content);
  return content;
}

export { CartProvider, useCart };
