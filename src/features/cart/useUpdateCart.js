import { useMutation } from "@tanstack/react-query";
import { updateCart as updateCartAPI } from "../../services/apiIngredients";
import { useToken } from "../../hooks/useToken";
export function useUpdateCart() {
  const { token } = useToken();
  const { mutate: updateCart, isPending: isLoading } = useMutation({
    mutationFn: ({ id, quantity }) =>
      updateCartAPI({ id, quantity, token }),
  });

  return { updateCart, isLoading };
}
