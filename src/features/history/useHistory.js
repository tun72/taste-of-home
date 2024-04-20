import { useQuery } from "@tanstack/react-query";
import { getHistory } from "../../services/apiIngredients";
import { useToken } from "../../hooks/useToken";
import { useSearchParams } from "react-router-dom";

export function useHistory() {
  const { token } = useToken();
  const [searchParams, setSearchParams] = useSearchParams();
  const state = searchParams.get("status");

  const { data, isLoading } = useQuery({
    queryFn: () => getHistory({ token,state }),
    queryKey: ["histories", state],
  });



  return { data, isLoading };
}
