import { ReactNode } from "react";

type PaginationBtnProps = {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: ReactNode;
};

function PaginationBtn({ children, onClick, active, disabled }: PaginationBtnProps) {
  return (
    <button
      onClick={onClick}
      disabled={active || disabled}
      className={[
        "inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium select-none transition-colors duration-150",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1",
        active
          ? "bg-slate-700 text-white shadow-sm cursor-default"
          : disabled
          ? "text-slate-300 cursor-not-allowed"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-800",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default PaginationBtn;
