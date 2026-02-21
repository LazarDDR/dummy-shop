import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: login,
    isLoading: isLoggingIn,
    error,
  } = useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      navigate("/", { replace: true });
      toast.success("Signed in successfully");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Invalid email or password");
    },
  });

  return { login, isLoggingIn, error };
}
