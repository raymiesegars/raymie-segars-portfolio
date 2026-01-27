export const LangChainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <rect width="256" height="256" fill="#000000" rx="60" />
      <path
        fill="#FFFFFF"
        d="M64 128c0-35.346 28.654-64 64-64s64 28.654 64 64-28.654 64-64 64-64-28.654-64-64zm112 0c0-26.51-21.49-48-48-48s-48 21.49-48 48 21.49 48 48 48 48-21.49 48-48z"
      />
      <circle fill="#FFFFFF" cx="96" cy="128" r="16" />
      <circle fill="#FFFFFF" cx="160" cy="128" r="16" />
      <path
        fill="#FFFFFF"
        d="M128 96l32 32-32 32-32-32z"
        opacity="0.5"
      />
    </svg>
  );
};
