import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../../services/apiRecipe";

export function useCountry() {
  const { data: country, isPending: isLoading } = useQuery({
    queryFn: getCountry,
    queryKey: ["country"],
  });

 

  return { country, isLoading };
}
