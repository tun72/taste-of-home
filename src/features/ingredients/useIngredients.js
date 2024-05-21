import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIngredients } from "../../services/apiIngredients";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
export function useIngredients() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryFn: () => getIngredients({ page, search, category }),
    queryKey: ["ingredients", page, search, category],
    
  });

  const count = data?.total;
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["ingredients", page + 1],
      queryFn: () => getIngredients({ page: page + 1 }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["ingredients", page - 1],
      queryFn: () => getIngredients({ page: page - 1 }),
    });

  return { data, isLoading, error };
}
