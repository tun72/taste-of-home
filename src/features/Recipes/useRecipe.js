import { useQuery } from "@tanstack/react-query";
import { getReciepe } from "../../services/apiRecipe";

export function useRecipe() {
  const { data: recipes, isLoading } = useQuery({
    queryFn: getReciepe,
    queryKey: ["recipe"],
  });

  console.log(recipes);
  return { recipes, isLoading };
}
