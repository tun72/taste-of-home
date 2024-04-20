import { useMutation } from "@tanstack/react-query";
import { addToCart as addToCartAPI } from "../../services/apiIngredients";
import { useToken } from "../../hooks/useToken";
export function useAddCart() {
  const { token } = useToken();
  const { mutate: addToCart, isPending: isLoading } = useMutation({
    mutationFn: ({ id, quantity }) => addToCartAPI({ id, quantity, token }),
  });

  return { addToCart, isLoading };
}
