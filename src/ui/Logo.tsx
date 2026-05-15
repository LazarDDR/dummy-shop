function Logo() {
  return (
    <svg
      viewBox="0 0 185 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-auto"
      aria-label="Dummy Shop"
    >
      <rect x="1" y="13" width="30" height="26" rx="5" fill="white" fillOpacity="0.92" />
      <path
        d="M 7.5 13 C 7.5 3 24.5 3 24.5 13"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeOpacity="0.92"
      />
      <circle cx="16" cy="27" r="5" fill="#f97316" />
      <text
        x="42"
        y="26"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="white"
        dominantBaseline="middle"
      >
        Dummy Shop
      </text>
    </svg>
  );
}

export default Logo;
