import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useDispatch } from "react-redux";
import { setCart, setCartId } from "../../redux/cartSlice";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    mutationKey: ["logout"],
    onMutate: () => {
      queryClient.setQueryData(["user"], null);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      dispatch(setCart({ products: [] }));
      dispatch(setCartId(""));
      toast.success("Successfully logged out");
    },
  });

  return { logout, isPending };
}
