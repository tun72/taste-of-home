import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/apiIngredients";

export function useCategory() {
  const { data, isLoading, error } = useQuery({
    queryFn: getCategory,
    queryKey: ["categories"],
  });

  return { data, isLoading, error };
}
