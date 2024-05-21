import { useMutation, useQuery } from "@tanstack/react-query";
import { useToken } from "../../hooks/useToken";
import { placeOrder } from "../../services/apiIngredients";
import toast from "react-hot-toast";

export function useOrder() {
  const { token } = useToken();

  const {
    mutate: orderNow,
    isPending: isLoading,
    status,
    data,
  } = useMutation({
    mutationFn: ({ order }) => placeOrder({ token, order }),
    onSuccess: () => {
      toast.success("Successfully ordered");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { orderNow, isLoading, status, data };
}
