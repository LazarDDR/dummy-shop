import { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = error instanceof Error ? error.message : "Unknown error";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-100 bg-white p-12 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-700">Something went wrong</h1>
        <p className="text-sm text-slate-400">{message}</p>
        <button
          onClick={resetErrorBoundary}
          className="cursor-pointer mt-2 rounded-xl bg-slate-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 active:bg-slate-900"
        >
          Try again
        </button>
      </div>
    </main>
  );
}

export default ErrorFallback;
