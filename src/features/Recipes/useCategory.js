import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/apiRecipe";

export function useCategory() {
  const { data, isLoading, error } = useQuery({
    queryFn: getCategory,
    queryKey: ["recipe-category"],
  });

  console.log(data);
  return { data, isLoading, error };
}
