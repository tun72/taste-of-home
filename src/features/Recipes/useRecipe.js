import { useQuery } from "@tanstack/react-query";
import { getReciepes } from "../../services/apiRecipe";


export function useRecipe({ country }) {
  const { data, isLoading } = useQuery({
    queryFn: () => getReciepes({ country }),
    queryKey: ["recipe", country],
  });

  return { data, isLoading };
}
