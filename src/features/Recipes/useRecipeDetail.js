import { useQuery } from "@tanstack/react-query";
import { getRecipeDetail } from "../../services/apiRecipe";

export function useRecipeDetail({ id }) {
  const { data, isLoading } = useQuery({
    queryFn: () => getRecipeDetail(id),
    queryKey: ["recipe", id],
  });


  return { data, isLoading };
}
