import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIngredient } from "../../services/apiIngredients";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
export function useIngredients() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const search = searchParams.get("search");
  const queryClient = useQueryClient();
  
  const { data, isLoading, error } = useQuery({
    queryFn: () => getIngredient({ page, search }),
    queryKey: ["ingredients", page, search],
  });

  const count = data?.total;
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    console.log(page + "Counted");
    queryClient.prefetchQuery({
      queryKey: ["ingredients", page + 1],
      queryFn: () => getIngredient({ page: page + 1 }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["ingredients", page - 1],
      queryFn: () => getIngredient({ page: page - 1 }),
    });

  return { data, isLoading, error };
}
