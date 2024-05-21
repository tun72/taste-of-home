import { useQuery } from "@tanstack/react-query";
import { getHistory } from "../../services/apiIngredients";
import { useSearchParams } from "react-router-dom";

export function useHistory() {
  const [searchParams] = useSearchParams();
  let status = searchParams.get("status") || "all";


  const { data, isLoading } = useQuery({
    queryFn: () => getHistory({ status }),
    queryKey: ["histories", status],
  });

  return { data, isLoading };
}
