import { useQuery } from "@tanstack/react-query";
import { getReciepes } from "../../services/apiRecipe";


export function useRecipe({ country, category, search}) {
  const { data, isLoading } = useQuery({
    queryFn: () => getReciepes({ country, category, search }),
    queryKey: ["recipe", country, category],
  });

  return { data, isLoading };
}
