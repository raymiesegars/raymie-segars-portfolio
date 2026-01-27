export const TypeScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <rect width="256" height="256" fill="#3178C6" rx="60" />
      <path
        fill="#FFFFFF"
        d="M128 64c-35.346 0-64 28.654-64 64s28.654 64 64 64c17.673 0 33.6-7.2 45.1-18.8l-12.8-11.2c-8.8 8.8-20.8 14.2-34.3 14.2-26.51 0-48-21.49-48-48s21.49-48 48-48c13.5 0 25.5 5.4 34.3 14.2l12.8-11.2C161.6 71.2 145.673 64 128 64z"
      />
      <path
        fill="#FFFFFF"
        d="M192 128h-32v16h16v48h16v-64z"
      />
    </svg>
  );
};
