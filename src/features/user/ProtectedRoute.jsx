import { Navigate } from "react-router";
import { useCurrentUser } from "../authentication/useCurrentUser";

function ProtectedRoute({ children }) {
  const { currentUser, isLoading } = useCurrentUser();

  if (isLoading) return null;

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
