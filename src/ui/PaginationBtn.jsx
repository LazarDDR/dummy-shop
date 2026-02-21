function PaginationBtn({ children, onClick, active, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`pagination-btn ${active ? "pagination-btn--active" : ""} `}
      disabled={active || disabled}
    >
      {children}
    </button>
  );
}

export default PaginationBtn;
