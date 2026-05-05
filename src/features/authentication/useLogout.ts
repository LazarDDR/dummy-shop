import { useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useDispatch } from "react-redux";
import { setCart, setCartId } from "../../redux/cartSlice";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  function logout() {
    logoutApi();
    queryClient.setQueryData(["user"], null);
    dispatch(setCart([]));
    dispatch(setCartId(null));
    toast.success("Successfully logged out");
  }

  return logout;
}
