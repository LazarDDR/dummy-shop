function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main>
      <div>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </main>
  );
}

export default ErrorFallback;
