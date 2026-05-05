import { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = error instanceof Error ? error.message : "Unknown error";

  return (
    <main className="error-fallback-main">
      <div className="error-container">
        <h1>Something went wrong</h1>
        <p>{message}</p>
        <button className="error-btn" onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    </main>
  );
}

export default ErrorFallback;
