import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../../services/apiDummyShop";

export function useSearchProducts({ query, page }) {
  const { data: searchedProducts, isLoading: isSearching } = useQuery({
    queryFn: ({ signal }) => searchProducts({ query, page, signal }),
    queryKey: ["search", query, page],
    enabled: !!query,
  });

  return { searchedProducts, isSearching };
}
