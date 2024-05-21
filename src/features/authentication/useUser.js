import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiUser";
import { useToken } from "../../hooks/useToken";

export function useUser() {
  const { token } = useToken();
  const {
    isPending: isLoading,
    data: user,
    error,
  } = useQuery({
    queryFn: () => getCurrentUser({ token }),
    queryKey: ["user"],
  });


  return {
    isLoading,
    user,
    error,
    isAuthenticated: !!user,
  };
}
