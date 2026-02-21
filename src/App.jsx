import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Shop from "./features/shop/Shop";
import Cart from "./features/cart/Cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductDetails from "./features/shop/ProductDetails";
import LoginForm from "./features/authentication/LoginForm";
import UserProfile from "./features/user/UserProfile";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./features/user/ProtectedRoute";
import PageNotFound from "./ui/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
      gcTime: 20 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<Shop />} />
            <Route
              path="/product-details/:productId"
              element={<ProductDetails />}
            />
            <Route path="/cart" element={<Cart />} />

            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="bottom-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            style: {
              background: "#5262bc",
              color: "#fff",
            },
          },
          error: {
            duration: 5000,
            style: {
              background: "#C62828",
              color: "#fff",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
