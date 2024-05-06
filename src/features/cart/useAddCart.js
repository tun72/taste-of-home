import { useMutation } from "@tanstack/react-query";
import { addToCart as addToCartAPI } from "../../services/apiIngredients";
import { useToken } from "../../hooks/useToken";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addIngredient } from "./cartSlice";

// { name, price, id, quantity: 1, totalPrice: 1 },

export function useAddCart() {
  const { token } = useToken();
  const dispatch = useDispatch();

  const { mutate: addToCart, isPending: isLoading } = useMutation({
    mutationFn: ({ id, quantity }) => addToCartAPI({ id, quantity, token }),
    onSuccess: (data) => {
      let {
        quantity,
        ingredient: { name, price, _id },
      } = data.cart;

      const ingredient = {
        name,
        price,
        quantity,
        id: _id,
        totalPrice: quantity * price,
      };

      console.log(ingredient);
      dispatch(addIngredient(ingredient));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { addToCart, isLoading };
}
