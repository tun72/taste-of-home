import { useMutation, useQuery } from "@tanstack/react-query";
import { useToken } from "../../hooks/useToken";
import { placeOrder } from "../../services/apiIngredients";

export function useOrder() {
  const {token} = useToken();

  
  const { mutate: orderNow, isPending: isLoading, status, data } = useMutation({
    mutationFn: ({ order }) => placeOrder({ token, order }),
  });

  console.log(status);
  return { orderNow, isLoading, status, data };
}
