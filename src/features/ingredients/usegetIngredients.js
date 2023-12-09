import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getIngredient } from "../../services/apiIngredients";
export function useIngredient() {
  const { ingredientId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryFn: () => getIngredient(ingredientId),
    queryKey: ["ingredient", ingredientId],
  });

  console.log(data);

  return { data, isLoading, error };
}
