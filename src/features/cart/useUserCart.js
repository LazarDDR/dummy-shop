import { useQuery } from "@tanstack/react-query";
import { getUserCart } from "../../services/apiDummyShop";

export function useUserCart(id) {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => getUserCart(id),
    queryKey: ["cart", id],
    enabled: !!id,
  });

  const userCart = data?.carts?.[0];

  return { userCart, isLoading, isSuccess };
}
