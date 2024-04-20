import { useMutation } from "@tanstack/react-query";
import { deleteCart as deleteCartAPI } from "../../services/apiIngredients";
import { useToken } from "../../hooks/useToken";
export function useDeleteCart() {
  const { token } = useToken();
  const { mutate: deleteCart, isPending: isLoading } = useMutation({
    mutationFn: ({ id, status }) => deleteCartAPI({ id, status, token }),
  });

  return { deleteCart, isLoading };
}
