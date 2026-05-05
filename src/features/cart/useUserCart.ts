import { useQuery } from "@tanstack/react-query";
import { getUserCart } from "../../services/apiDummyShop";

export function useUserCart(id: number) {
  const {
    data: userCart,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: () => getUserCart(id),
    queryKey: ["cart", id],
    enabled: !!id,
  });

  return { userCart, isLoading, isSuccess };
}
