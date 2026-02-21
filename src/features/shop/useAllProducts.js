import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllProducts } from "../../services/apiDummyShop";

export function useAllProducts({ category, page }) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["products", category, page],
    queryFn: () => getAllProducts({ category, page }),
  });

  const pageCount = Math.ceil(data?.total / 8);

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["products", category, page - 1],
      queryFn: () => getAllProducts({ category, page: page - 1 }),
    });

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["products", category, page + 1],
      queryFn: () => getAllProducts({ category, page: page + 1 }),
    });

  return { data, isLoading };
}
