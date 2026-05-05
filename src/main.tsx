import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";

import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.replace("/")}
        >
          <App />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
