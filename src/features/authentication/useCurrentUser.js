import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useCurrentUser() {
  const { data: currentUser, isLoading } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });

  return {
    currentUser,
    isLoading,
  };
}
