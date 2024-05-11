import { useQuery } from "@tanstack/react-query";
import { getReciepes } from "../../services/apiRecipe";


export function useRecipe({ country, category }) {
  const { data, isLoading } = useQuery({
    queryFn: () => getReciepes({ country, category }),
    queryKey: ["recipe", country, category],
  });

  return { data, isLoading };
}
